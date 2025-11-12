<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\SubscriptionType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

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

    #[Route(path: '/logout', name: 'logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    // SubscriptionType
    #[Route(path: '/subscription', name: 'subscription')]
    public function register(Request $request,UserPasswordHasherInterface $passwordEncoder,EntityManagerInterface $entityManager): Response
    {
        // Vérification si l'objet existe via l'injection de dependance
        // Si injection de dependance = On est en Modification
        // Sinon, on est un Creation et on créé l'objet
        
        $user = new User;
      
        // Récupération du formulaire et association avec l'objet
        $form = $this->createForm(SubscriptionType::class,$user);

        // Récupération des données POST du formulaire
        $form->handleRequest($request);
        // Vérification si le formulaire est soumis et Valide
        if($form->isSubmitted() && $form->isValid()){
            $user->setRoles(['ROLE_USER']);
            $user->setPassword(
                $passwordEncoder->hashPassword($user,$form->get('password')->getData())
            );
            // Persistance des données
            $entityManager->persist($user);
            // Envoi en BDD
            $entityManager->flush();
            $this->addFlash('success', 'Votre inscription a été réalisée avec succès !');
            // Redirection de l'utilisateur
            return $this->redirectToRoute('home');
        }
        return $this->render('security/subscription.html.twig', [
          'userForm' => $form->createView(), //envoie du formulaire en VUE
        ]);
        
    }
}
