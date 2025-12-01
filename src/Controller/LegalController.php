<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/legal', name: 'legal_')]
class LegalController extends AbstractController
{
    #[Route('/mentions-legales', name: 'mentions')]
    public function mentionsLegales(): Response
    {
        return $this->render('legal/mentions-legales.html.twig');
    }

    #[Route('/politique-confidentialite', name: 'privacy')]
    public function politiqueConfidentialite(): Response
    {
        return $this->render('legal/politique-confidentialite.html.twig');
    }

    #[Route('/conditions-generales', name: 'terms')]
    public function conditionsGenerales(): Response
    {
        return $this->render('legal/conditions-generales.html.twig');
    }
}
