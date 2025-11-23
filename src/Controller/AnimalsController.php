<?php

namespace App\Controller;

use App\Entity\Animals;
use App\Entity\Comments;
use App\Entity\Favorites;
use App\Form\AnimalFormType;
use App\Form\CommentFormType;
use App\Repository\AnimalsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class AnimalsController extends AbstractController
{
    #[Route('/animals', name: 'animals')]
    public function index(AnimalsRepository $animalsRepository): Response
    {
        $animals = $animalsRepository->findAll();

        return $this->render('animals/index.html.twig', [
            'animals' => $animals,
        ]);
    }

    #[Route('/animals/add', name: 'animals_add')]
    #[IsGranted('ROLE_ASSOCIATION_MEMBER')]
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        // Récupérer l'association de l'utilisateur
        $userAssociation = null;
        foreach ($user->getAssociationMembers() as $membership) {
            if ($membership->isApproved()) {
                $userAssociation = $membership->getAssociation();
                break;
            }
        }

        if (!$userAssociation) {
            $this->addFlash('error', 'Vous devez être membre d\'une association pour ajouter un animal.');
            return $this->redirectToRoute('animals');
        }

        $animal = new Animals();
        $form = $this->createForm(AnimalFormType::class, $animal);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $animal->setAssociation($userAssociation);

            if (!$animal->getDateArrivee()) {
                $animal->setDateArrivee(new \DateTime());
            }

            $entityManager->persist($animal);
            $entityManager->flush();

            $this->addFlash('success', 'L\'animal a été ajouté avec succès !');

            return $this->redirectToRoute('animals');
        }

        return $this->render('animals/add.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/animals/{id}', name: 'animal_show', methods: ['GET'])]
    public function show(Animals $animal, Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = null;

        if ($user) {
            $comment = new Comments();
            $form = $this->createForm(CommentFormType::class, $comment);
        }

        return $this->render('animals/show.html.twig', [
            'animal' => $animal,
            'comment_form' => $form,
        ]);
    }

    #[Route('/animals/{id}/comment', name: 'animal_comment_add', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function addComment(Animals $animal, Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $comment = new Comments();
        $form = $this->createForm(CommentFormType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setUser($user);
            $comment->setAnimals($animal);

            $entityManager->persist($comment);
            $entityManager->flush();

            $this->addFlash('success', 'Commentaire ajouté avec succès !');
        }

        return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
    }

    #[Route('/animals/{id}/comment/{commentId}/reply', name: 'animal_comment_reply', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function addReply(Animals $animal, int $commentId, Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $parentComment = $entityManager->getRepository(Comments::class)->find($commentId);

        if (!$parentComment || $parentComment->getAnimals()->getId() !== $animal->getId()) {
            throw $this->createNotFoundException('Commentaire non trouvé');
        }

        $reply = new Comments();
        $form = $this->createForm(CommentFormType::class, $reply);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $reply->setUser($user);
            $reply->setAnimals($animal);
            $reply->setParent($parentComment);

            $entityManager->persist($reply);
            $entityManager->flush();

            $this->addFlash('success', 'Réponse ajoutée avec succès !');
        }

        return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
    }

    #[Route('/api/favorites', name: 'favorites_add', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function addFavorite(Request $request, EntityManagerInterface $entityManager, AnimalsRepository $animalsRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $animalId = $data['animalId'] ?? null;

        if (!$animalId) {
            return new JsonResponse(['success' => false, 'message' => 'ID animal manquant'], 400);
        }

        $animal = $animalsRepository->find($animalId);
        if (!$animal) {
            return new JsonResponse(['success' => false, 'message' => 'Animal non trouvé'], 404);
        }

        $user = $this->getUser();

        // Check if already favorited
        $existingFavorite = $entityManager->getRepository(Favorites::class)->findOneBy([
            'user' => $user,
            'animals' => $animal
        ]);

        if ($existingFavorite) {
            return new JsonResponse(['success' => false, 'message' => 'Déjà en favoris'], 400);
        }

        $favorite = new Favorites();
        $favorite->setUser($user);
        $favorite->setAnimals($animal);

        $entityManager->persist($favorite);
        $entityManager->flush();

        return new JsonResponse(['success' => true, 'message' => 'Ajouté aux favoris']);
    }

    #[Route('/api/favorites/{animalId}', name: 'favorites_remove', methods: ['DELETE'])]
    #[IsGranted('ROLE_USER')]
    public function removeFavorite(int $animalId, EntityManagerInterface $entityManager, AnimalsRepository $animalsRepository): JsonResponse
    {
        $animal = $animalsRepository->find($animalId);
        if (!$animal) {
            return new JsonResponse(['success' => false, 'message' => 'Animal non trouvé'], 404);
        }

        $user = $this->getUser();

        $favorite = $entityManager->getRepository(Favorites::class)->findOneBy([
            'user' => $user,
            'animals' => $animal
        ]);

        if (!$favorite) {
            return new JsonResponse(['success' => false, 'message' => 'Pas en favoris'], 400);
        }

        $entityManager->remove($favorite);
        $entityManager->flush();

        return new JsonResponse(['success' => true, 'message' => 'Retiré des favoris']);
    }
}
