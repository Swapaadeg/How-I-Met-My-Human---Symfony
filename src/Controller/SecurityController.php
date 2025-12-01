<?php

namespace App\Controller;

use App\Entity\Association;
use App\Entity\AssociationMember;
use App\Entity\User;
use App\Form\RegisterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/auth/check', name: 'auth_check')]
    public function authCheck(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the form_login key on your firewall.');
    }

    #[Route(path: '/logout', name: 'logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    // Page d'authentification combinée (login/register)
    #[Route(path: '/auth', name: 'auth')]
    public function auth(Request $request, AuthenticationUtils $authenticationUtils, UserPasswordHasherInterface $passwordEncoder, EntityManagerInterface $entityManager, TokenStorageInterface $tokenStorage): Response
    {
        // Gestion de la connexion
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        // Gestion de l'inscription - créer un nouvel User à chaque fois
        $user = new User();
        $registerForm = $this->createForm(RegisterType::class, $user, [
            'validation_groups' => ['Default', 'registration']
        ]);
        $registerForm->handleRequest($request);

        if ($registerForm->isSubmitted() && $registerForm->isValid()) {
            // Gérer manuellement le fichier uploadé
            $imageFile = $registerForm->get('imageFile')->getData();
            if ($imageFile) {
                $user->setImageFile($imageFile);
            }

            // Vérifier si l'email existe déjà
            $existingUser = $entityManager->getRepository(User::class)->findOneBy(['email' => $user->getEmail()]);
            if ($existingUser) {
                $this->addFlash('error', 'Cette adresse email est déjà utilisée. Veuillez utiliser une autre adresse email ou vous connecter si vous avez déjà un compte.');
                return $this->render('security/auth.html.twig', [
                    'last_username' => $lastUsername,
                    'error' => $error,
                    'registerForm' => $registerForm->createView(),
                ]);
            }

            $user->setRoles(['ROLE_USER']);
            $user->setPassword(
                $passwordEncoder->hashPassword($user, $registerForm->get('password')->getData())
            );
            
            try {
                $entityManager->persist($user);
                $entityManager->flush();

                // Nettoyer l'objet File après le flush pour éviter les erreurs de sérialisation
                $user->setImageFile(null);

                $this->addFlash('success', 'Votre inscription a été réalisée avec succès ! Bienvenue sur notre plateforme.');

                // Connecter automatiquement l'utilisateur
                $token = new UsernamePasswordToken($user, 'main', $user->getRoles());
                $tokenStorage->setToken($token);

                // Redirection vers l'étape optionnelle d'association
                return $this->redirectToRoute('post_registration_association');
            } catch (\Doctrine\DBAL\Exception\UniqueConstraintViolationException $e) {
                $this->addFlash('error', 'Cette adresse email est déjà utilisée. Veuillez utiliser une autre adresse email.');
            } catch (\Exception $e) {
                $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
            }
        }

        return $this->render('security/auth.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
            'registerForm' => $registerForm->createView(),
        ]);
    }

    // RegisterType
    #[Route(path: '/register', name: 'register')]
    public function register(Request $request,UserPasswordHasherInterface $passwordEncoder,EntityManagerInterface $entityManager): Response
    {
        // Vérification si l'objet existe via l'injection de dependance
        // Si injection de dependance = On est en Modification
        // Sinon, on est un Creation et on créé l'objet
        
        $user = new User;
      
        // Récupération du formulaire et association avec l'objet
        $form = $this->createForm(RegisterType::class,$user);

        // Récupération des données POST du formulaire
        $form->handleRequest($request);
        // Vérification si le formulaire est soumis et Valide
        if($form->isSubmitted() && $form->isValid()){
            // Vérifier si l'email existe déjà
            $existingUser = $entityManager->getRepository(User::class)->findOneBy(['email' => $user->getEmail()]);
            if ($existingUser) {
                $user->setImageFile(null);
                $this->addFlash('error', 'Cette adresse email est déjà utilisée. Veuillez utiliser une autre adresse email ou vous connecter si vous avez déjà un compte.');
                return $this->render('security/register.html.twig', [
                    'userForm' => $form->createView(),
                ]);
            }

            $user->setRoles(['ROLE_USER']);
            $user->setPassword(
                $passwordEncoder->hashPassword($user,$form->get('password')->getData())
            );
            
            try {
                // Persistance des données
                $entityManager->persist($user);
                // Envoi en BDD
                $entityManager->flush();
                $this->addFlash('success', 'Votre inscription a été réalisée avec succès !');
                // Redirection de l'utilisateur
                return $this->redirectToRoute('home');
            } catch (\Doctrine\DBAL\Exception\UniqueConstraintViolationException $e) {
                $user->setImageFile(null);
                $this->addFlash('error', 'Cette adresse email est déjà utilisée. Veuillez utiliser une autre adresse email.');
            } catch (\Exception $e) {
                $user->setImageFile(null);
                $this->addFlash('error', 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
            }
        }
        
        // Nettoyer l'objet File avant de rendre le formulaire
        if ($form->isSubmitted() && !$form->isValid()) {
            $user->setImageFile(null);
        }
        
        return $this->render('security/register.html.twig', [
          'userForm' => $form->createView(), //envoie du formulaire en VUE
        ]);
        
    }

    #[Route(path: '/post-registration-association', name: 'post_registration_association')]
    public function postRegistrationAssociation(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Vérifier que l'utilisateur est connecté
        $user = $this->getUser();
        if (!$user) {
            return $this->redirectToRoute('auth');
        }

        // Vérifier que l'utilisateur n'a pas déjà une association
        $existingMembership = $entityManager->getRepository(AssociationMember::class)
            ->findOneBy(['user' => $user]);
        
        if ($existingMembership) {
            return $this->redirectToRoute('home');
        }

        // Récupérer toutes les associations disponibles
        $associations = $entityManager->getRepository(Association::class)->findAll();

        if ($request->isMethod('POST')) {
            $action = $request->request->get('action');

            if ($action === 'skip') {
                $this->addFlash('info', 'Vous pouvez toujours rejoindre une association plus tard depuis votre profil.');
                return $this->redirectToRoute('home');
            }

            if ($action === 'create') {
                return $this->redirectToRoute('associations_new');
            }

            if ($action === 'join') {
                $associationId = $request->request->get('association_id');
                if ($associationId) {
                    $association = $entityManager->getRepository(Association::class)->find($associationId);
                    if ($association) {
                        // Créer une demande d'adhésion
                        $membership = new AssociationMember();
                        $membership->setUser($user);
                        $membership->setAssociation($association);
                        $membership->setStatus('pending');
                        $membership->setRole('member');
                        $membership->setCreatedAt(new \DateTime());
                        
                        $entityManager->persist($membership);
                        $entityManager->flush();

                        $this->addFlash('success', 'Votre demande d\'adhésion à l\'association "' . $association->getName() . '" a été envoyée !');
                        return $this->redirectToRoute('home');
                    }
                }
                $this->addFlash('error', 'Veuillez sélectionner une association.');
            }
        }

        return $this->render('security/post_registration_association.html.twig', [
            'associations' => $associations,
        ]);
    }
}
