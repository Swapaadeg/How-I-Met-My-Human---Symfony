<?php

namespace App\Controller;

use App\Entity\Animals;
use App\Form\AnimalFormType;
use App\Repository\AnimalsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    
    #[Route('/animals/{id}', name: 'animal_show')]
    public function show(Animals $animal): Response
    {
        return $this->render('animals/show.html.twig', [
            'animal' => $animal,
        ]);
    }

    #[Route('/animals/add', name: 'animals_add')]
    #[IsGranted('ROLE_ASSOCIATION')]
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $animal = new Animals();
        $form = $this->createForm(AnimalFormType::class, $animal);
        
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {

            $animal->setAssociation($this->getUser());
            
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


}
