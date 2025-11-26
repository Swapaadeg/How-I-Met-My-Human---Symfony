<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PagesController extends AbstractController
{
    #[Route('/conditions-adoption', name: 'adoption_conditions')]
    public function adoptionConditions(): Response
    {
        return $this->render('pages/adoption_conditions.html.twig');
    }

    #[Route('/devenir-benevole', name: 'become_volunteer')]
    public function becomeVolunteer(): Response
    {
        return $this->render('pages/become_volunteer.html.twig');
    }

    #[Route('/notre-equipe', name: 'our_team')]
    public function ourTeam(): Response
    {
        return $this->render('pages/our_team.html.twig');
    }
}
