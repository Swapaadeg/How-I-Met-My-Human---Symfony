<?php

namespace App\Controller;

use App\Repository\AnimalsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(AnimalsRepository $animalsRepository): Response
    {
        $oldestAnimals = $animalsRepository->findOldestInShelter();
        
        return $this->render('home/home.html.twig', [
            'controller_name' => 'HomeController',
            'oldest_animals' => $oldestAnimals,
        ]);
    }
}
