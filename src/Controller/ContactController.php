<?php

namespace App\Controller;

use App\Form\ContactType;
use App\Repository\AnimalsRepository;
use App\Repository\AssociationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact/animal/{animalId}', name: 'contact_animal', methods: ['GET', 'POST'])]
    public function contactAnimal(
        int $animalId,
        Request $request,
        AnimalsRepository $animalsRepository,
        MailerInterface $mailer
    ): Response {
        $animal = $animalsRepository->find($animalId);

        if (!$animal) {
            return $this->json([
                'success' => false,
                'message' => 'Animal non trouvé'
            ], 404);
        }

        if (!$animal->getAssociation() || !$animal->getAssociation()->getContactEmail()) {
            return $this->json([
                'success' => false,
                'message' => 'Aucun email de contact disponible pour cette association'
            ], 400);
        }

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            try {
                // Créer l'email
                $email = (new Email())
                    ->from('noreply@himmh.fr') // Vous devrez configurer cet email
                    ->to($animal->getAssociation()->getContactEmail())
                    ->replyTo($data['email'])
                    ->subject('Demande d\'information concernant ' . $animal->getName())
                    ->html($this->renderView('emails/contact_animal.html.twig', [
                        'animal' => $animal,
                        'data' => $data
                    ]));

                $mailer->send($email);

                return $this->json([
                    'success' => true,
                    'message' => 'Votre message a été envoyé avec succès !'
                ]);
            } catch (\Exception $e) {
                return $this->json([
                    'success' => false,
                    'message' => 'Une erreur est survenue lors de l\'envoi du message'
                ], 500);
            }
        }

        // Retourner le formulaire en HTML pour l'afficher dans la modal
        return $this->render('contact/modal_form.html.twig', [
            'form' => $form->createView(),
            'animal' => $animal
        ]);
    }

    #[Route('/contact/association/{associationId}', name: 'contact_association', methods: ['GET', 'POST'])]
    public function contactAssociation(
        int $associationId,
        Request $request,
        AssociationRepository $associationRepository,
        MailerInterface $mailer
    ): Response {
        $association = $associationRepository->find($associationId);

        if (!$association) {
            return $this->json([
                'success' => false,
                'message' => 'Association non trouvée'
            ], 404);
        }

        if (!$association->getContactEmail()) {
            return $this->json([
                'success' => false,
                'message' => 'Aucun email de contact disponible pour cette association'
            ], 400);
        }

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            try {
                $email = (new Email())
                    ->from('noreply@himmh.fr')
                    ->to($association->getContactEmail())
                    ->replyTo($data['email'])
                    ->subject('Demande d\'information')
                    ->html($this->renderView('emails/contact_association.html.twig', [
                        'association' => $association,
                        'data' => $data
                    ]));

                $mailer->send($email);

                return $this->json([
                    'success' => true,
                    'message' => 'Votre message a été envoyé avec succès !'
                ]);
            } catch (\Exception $e) {
                return $this->json([
                    'success' => false,
                    'message' => 'Une erreur est survenue lors de l\'envoi du message'
                ], 500);
            }
        }

        return $this->render('contact/modal_form.html.twig', [
            'form' => $form->createView(),
            'association' => $association,
            'animal' => null
        ]);
    }
}
