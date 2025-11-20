<?php

namespace App\Controller;

use App\Repository\AnimalsRepository;
use App\Repository\AssociationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(AnimalsRepository $animalsRepository, AssociationRepository $associationRepository): Response
    {
        $oldestAnimals = $animalsRepository->findOldestInShelter(10);
        $totalAnimals = $animalsRepository->count([]);
        $totalAssociations = $associationRepository->count([]);
        
        return $this->render('home/home.html.twig', [
            'controller_name' => 'HomeController',
            'oldest_animals' => $oldestAnimals,
            'total_animals' => $totalAnimals,
            'total_associations' => $totalAssociations,
        ]);
    }
}
