<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AssociationsController extends AbstractController
{
    #[Route('/associations', name: 'associations')]
    public function index(): Response
    {
        return $this->render('associations/index.html.twig', [
            'controller_name' => 'AssociationsController',
        ]);
    }
}
