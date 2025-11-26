<?php

namespace App\Controller\Admin;

use App\Entity\AdopterNews;
use App\Entity\Animals;
use App\Entity\Association;
use App\Entity\Comments;
use App\Entity\Department;
use App\Entity\Species;
use App\Entity\Tags;
use App\Entity\User;
use App\Repository\AdopterNewsRepository;
use App\Repository\AnimalsRepository;
use App\Repository\AssociationRepository;
use App\Repository\CommentsRepository;
use App\Repository\SpeciesRepository;
use App\Repository\UserRepository;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    public function __construct(
        private AnimalsRepository $animalsRepository,
        private AssociationRepository $associationRepository,
        private UserRepository $userRepository,
        private CommentsRepository $commentsRepository,
        private AdopterNewsRepository $adopterNewsRepository,
        private SpeciesRepository $speciesRepository,
    ) {
    }

    public function index(): Response
    {
        // Récupérer les statistiques
        $stats = [
            'users' => $this->userRepository->count([]),
            'animals' => $this->animalsRepository->count([]),
            'associations' => $this->associationRepository->count([]),
            'comments' => $this->commentsRepository->count([]),
            'adopter_news' => $this->adopterNewsRepository->count([]),
            'species' => $this->speciesRepository->count([]),
        ];

        // Récupérer les animaux récents
        $recentAnimals = $this->animalsRepository->findBy([], ['id' => 'DESC'], 5);

        // Récupérer les commentaires récents
        $recentComments = $this->commentsRepository->findBy([], ['date_ajout' => 'DESC'], 5);

        return $this->render('admin/dashboard.html.twig', [
            'stats' => $stats,
            'recent_animals' => $recentAnimals,
            'recent_comments' => $recentComments,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('How I Met My Human - Administration')
            ->setFaviconPath('favicon.ico');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Tableau de bord', 'fa fa-home');

        yield MenuItem::section('Gestion des animaux');
        yield MenuItem::linkToCrud('Animaux', 'fas fa-paw', Animals::class);
        yield MenuItem::linkToCrud('Espèces', 'fas fa-list', Species::class);
        yield MenuItem::linkToCrud('Tags', 'fas fa-tags', Tags::class);

        yield MenuItem::section('Associations');
        yield MenuItem::linkToCrud('Associations', 'fas fa-building', Association::class);
        yield MenuItem::linkToCrud('Départements', 'fas fa-map-marker-alt', Department::class);

        yield MenuItem::section('Contenu');
        yield MenuItem::linkToCrud('Nouvelles d\'adoptants', 'fas fa-heart', AdopterNews::class);
        yield MenuItem::linkToCrud('Commentaires', 'fas fa-comments', Comments::class);

        yield MenuItem::section('Utilisateurs');
        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-users', User::class);

        yield MenuItem::section('');
        yield MenuItem::linkToUrl('Retour au site', 'fas fa-arrow-left', '/');
    }
}
