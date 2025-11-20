<?php

namespace App\Controller;

use App\Entity\AdopterNews;
use App\Form\AdopterNewsType;
use App\Repository\AdopterNewsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class AdopterNewsController extends AbstractController
{
    #[Route('/adopter-news/new', name: 'adopter_news_new')]
    #[IsGranted('ROLE_USER')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $news = new AdopterNews();
        $form = $this->createForm(AdopterNewsType::class, $news);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $news->setUser($this->getUser());
            $news->setCreatedAt(new \DateTime());

            try {
                $entityManager->persist($news);
                $entityManager->flush();

                $this->addFlash('success', 'Votre nouvelle a été partagée avec succès !');

                return $this->redirectToRoute('home');
            } catch (\Exception) {
                $news->setImageFile(null);
                $this->addFlash('error', 'Une erreur est survenue lors de la publication. Veuillez réessayer.');
            }
        }

        // Nettoyer l'objet File avant de rendre le formulaire pour éviter les erreurs de sérialisation
        if ($form->isSubmitted() && !$form->isValid()) {
            $news->setImageFile(null);
        }

        return $this->render('adopter_news/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/adopter-news', name: 'adopter_news_list')]
    public function list(AdopterNewsRepository $adopterNewsRepository): Response
    {
        $newsList = $adopterNewsRepository->findBy([], ['createdAt' => 'DESC']);

        return $this->render('adopter_news/list.html.twig', [
            'news_list' => $newsList,
        ]);
    }

    #[Route('/adopter-news/{id}/delete', name: 'adopter_news_delete', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function delete(AdopterNews $news, Request $request, EntityManagerInterface $entityManager): Response
    {
        // Vérifier que l'utilisateur est le propriétaire de la nouvelle
        if ($news->getUser() !== $this->getUser() && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete'.$news->getId(), $request->request->get('_token'))) {
            $entityManager->remove($news);
            $entityManager->flush();

            $this->addFlash('success', 'Votre nouvelle a été supprimée.');
        }

        return $this->redirectToRoute('home');
    }
}
