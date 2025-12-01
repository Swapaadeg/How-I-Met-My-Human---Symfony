<?php

namespace App\Controller;

use App\Entity\Animals;
use App\Entity\Comments;
use App\Entity\Favorites;
use App\Form\AnimalFormType;
use App\Form\CommentFormType;
use App\Repository\AnimalsRepository;
use App\Repository\SpeciesRepository;
use App\Repository\DepartmentRepository;
use App\Service\PermissionService;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class AnimalsController extends AbstractController
{
    #[Route('/animals', name: 'animals')]
    public function index(
        Request $request,
        AnimalsRepository $animalsRepository,
        SpeciesRepository $speciesRepository,
        DepartmentRepository $departmentRepository,
        PaginatorInterface $paginator
    ): Response
    {
        // Récupérer les filtres depuis la requête
        $speciesId = $request->query->get('species') ? (int)$request->query->get('species') : null;
        $departmentId = $request->query->get('department') ? (int)$request->query->get('department') : null;
        $sexe = $request->query->get('sexe');

        // Construire la requête avec filtres
        $qb = $animalsRepository->createQueryBuilder('a')
            ->orderBy('a.date_arrivee', 'DESC');

        if ($speciesId) {
            $qb->andWhere('a.species = :species')
               ->setParameter('species', $speciesId);
        }

        if ($departmentId) {
            $qb->leftJoin('a.association', 'assoc')
               ->andWhere('assoc.department = :department')
               ->setParameter('department', $departmentId);
        }

        if ($sexe) {
            $qb->andWhere('a.sexe = :sexe')
               ->setParameter('sexe', $sexe);
        }

        $query = $qb->getQuery();

        $animals = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            9
        );

        // Récupérer toutes les espèces et départements pour les filtres
        $allSpecies = $speciesRepository->findAll();
        $allDepartments = $departmentRepository->findAll();

        // Check if user is member of an association
        $user = $this->getUser();
        $isMember = false;
        $userFavoriteIds = [];

        if ($user) {
            foreach ($user->getAssociationMembers() as $membership) {
                if ($membership->isApproved()) {
                    $isMember = true;
                    break;
                }
            }

            // Get all favorite animal IDs for this user
            $favorites = $user->getFavorites();
            foreach ($favorites as $favorite) {
                $userFavoriteIds[] = $favorite->getAnimals()->getId();
            }
        }

        return $this->render('animals/index.html.twig', [
            'animals' => $animals,
            'allSpecies' => $allSpecies,
            'allDepartments' => $allDepartments,
            'currentSpecies' => $speciesId,
            'currentDepartment' => $departmentId,
            'currentSexe' => $sexe,
            'is_member' => $isMember,
            'user_favorite_ids' => $userFavoriteIds,
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
    public function show(Animals $animal, Request $request, EntityManagerInterface $entityManager, PermissionService $permissionService): Response
    {
        $user = $this->getUser();
        $form = null;
        $replyForms = [];
        $canEdit = false;
        $isFavorited = false;

        if ($user) {
            $comment = new Comments();
            $form = $this->createForm(CommentFormType::class, $comment);

            // Create a reply form for each parent comment
            foreach ($animal->getComments() as $comment) {
                if ($comment->getParent() === null) {
                    $reply = new Comments();
                    $replyForms[$comment->getId()] = $this->createForm(CommentFormType::class, $reply)->createView();
                }
            }

            // Check if user can edit this animal
            $canEdit = $permissionService->canUserManageAnimal($user, $animal);

            // Check if animal is already in user's favorites
            $favorite = $entityManager->getRepository(Favorites::class)->findOneBy([
                'user' => $user,
                'animals' => $animal
            ]);
            $isFavorited = $favorite !== null;
        }

        return $this->render('animals/show.html.twig', [
            'animal' => $animal,
            'comment_form' => $form,
            'reply_forms' => $replyForms,
            'can_edit' => $canEdit,
            'is_favorited' => $isFavorited,
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

    #[Route('/animals/{id}/comment/{commentId}/delete', name: 'animal_comment_delete', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function deleteComment(Animals $animal, int $commentId, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $comment = $entityManager->getRepository(Comments::class)->find($commentId);

        if (!$comment || $comment->getAnimals()->getId() !== $animal->getId()) {
            throw $this->createNotFoundException('Commentaire non trouvé');
        }

        // Check if the user is the owner of the comment
        if ($comment->getUser()->getId() !== $user->getId()) {
            $this->addFlash('error', 'Vous ne pouvez pas supprimer ce commentaire.');
            return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
        }

        // Delete replies first
        foreach ($comment->getReplies() as $reply) {
            $entityManager->remove($reply);
        }

        $entityManager->remove($comment);
        $entityManager->flush();

        $this->addFlash('success', 'Commentaire supprimé avec succès !');

        return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
    }

    #[Route('/animals/{id}/edit', name: 'animals_edit')]
    #[IsGranted('ROLE_ASSOCIATION_MEMBER')]
    public function edit(Animals $animal, Request $request, EntityManagerInterface $entityManager, PermissionService $permissionService): Response
    {
        $user = $this->getUser();

        // Check if user can edit this animal
        if (!$permissionService->canUserManageAnimal($user, $animal)) {
            $this->addFlash('error', 'Vous n\'avez pas les droits pour modifier cet animal.');
            return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
        }

        $form = $this->createForm(AnimalFormType::class, $animal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'L\'animal a été modifié avec succès !');

            return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
        }

        return $this->render('animals/edit.html.twig', [
            'form' => $form->createView(),
            'animal' => $animal,
        ]);
    }

    #[Route('/animals/{id}/delete', name: 'animals_delete', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MEMBER')]
    public function delete(Animals $animal, EntityManagerInterface $entityManager, PermissionService $permissionService): Response
    {
        $user = $this->getUser();

        // Check if user can delete this animal
        if (!$permissionService->canUserManageAnimal($user, $animal)) {
            $this->addFlash('error', 'Vous n\'avez pas les droits pour supprimer cet animal.');
            return $this->redirectToRoute('animal_show', ['id' => $animal->getId()]);
        }

        $associationId = $animal->getAssociation()->getId();

        // Delete related favorites first
        foreach ($animal->getFavorites() as $favorite) {
            $entityManager->remove($favorite);
        }

        // Delete related comments
        foreach ($animal->getComments() as $comment) {
            $entityManager->remove($comment);
        }

        $entityManager->remove($animal);
        $entityManager->flush();

        $this->addFlash('success', 'L\'animal a été supprimé avec succès.');

        return $this->redirectToRoute('association_show', ['id' => $associationId]);
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
