<?php

namespace App\Controller;

use App\Form\UserProfileType;
use App\Repository\FavoritesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'profile')]
    #[IsGranted('ROLE_USER')]
    public function index(FavoritesRepository $favoritesRepository): Response
    {
        $user = $this->getUser();

        if (!$user) {
            throw $this->createAccessDeniedException('Vous devez être connecté pour accéder à cette page.');
        }

        // Récupérer les favoris avec les animaux chargés
        $favorites = $favoritesRepository->findByUserWithAnimals($user);

        // Get all favorite animal IDs for this user
        $userFavoriteIds = [];
        foreach ($favorites as $favorite) {
            $userFavoriteIds[] = $favorite->getAnimals()->getId();
        }

        return $this->render('profile/index.html.twig', [
            'user' => $user,
            'favorites' => $favorites,
            'user_favorite_ids' => $userFavoriteIds,
        ]);
    }

    #[Route('/profile/edit', name: 'profile_edit')]
    #[IsGranted('ROLE_USER')]
    public function edit(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            $this->addFlash('success', 'Votre profil a été mis à jour avec succès !');

            return $this->redirectToRoute('profile');
        }

        return $this->render('profile/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
