<?php

namespace App\Controller;

use App\Entity\Association;
use App\Entity\AssociationMember;
use App\Entity\User;
use App\Form\AssociationType;
use App\Service\AssociationMembershipService;
use App\Service\PermissionService;
use App\Repository\AssociationRepository;
use App\Repository\AssociationMemberRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class AssociationsController extends AbstractController
{
    public function __construct(
        private AssociationMembershipService $membershipService,
        private PermissionService $permissionService,
        private AssociationRepository $associationRepository,
        private AssociationMemberRepository $associationMemberRepository,
        private EntityManagerInterface $entityManager
    ) {
    }

    /**
     * List all associations (public)
     */
    #[Route('/associations', name: 'associations')]
    public function index(): Response
    {
        $associations = $this->associationRepository->findAll();

        return $this->render('associations/index.html.twig', [
            'associations' => $associations,
        ]);
    }

    /**
     * Create a new association
     */
    #[Route('/associations/new', name: 'associations_new', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function new(Request $request): Response
    {
        $user = $this->getUser();
        
        // Check if user can create associations
        if (!$this->permissionService->canUserCreateAssociation($user)) {
            throw $this->createAccessDeniedException();
        }

        $association = new Association();
        $form = $this->createForm(AssociationType::class, $association);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var User $user */
            $user = $this->getUser();
            
            $this->entityManager->persist($association);
            $this->entityManager->flush();

            // Create membership for the creator as manager
            $membership = new AssociationMember();
            $membership->setUser($user);
            $membership->setAssociation($association);
            $membership->setRole(AssociationMember::ROLE_MANAGER);
            $membership->setStatus(AssociationMember::STATUS_APPROVED);
            $membership->setApprovedAt(new \DateTime());
            $membership->setApprovedBy($user);

            $this->entityManager->persist($membership);
            
            // Update user roles
            if ($user instanceof User) {
                $user->updateRolesFromMemberships();
            }
            
            $this->entityManager->flush();

            $this->addFlash('success', 'Association créée avec succès ! Vous êtes maintenant gérant de cette association.');

            return $this->redirectToRoute('associations_show', ['id' => $association->getId()]);
        }

        return $this->render('associations/new.html.twig', [
            'association' => $association,
            'form' => $form,
        ]);
    }

    /**
     * Show association details
     */
    #[Route('/associations/{id}', name: 'associations_show', methods: ['GET'])]
    public function show(Association $association): Response
    {
        $user = $this->getUser();
        $canJoin = $user && $this->permissionService->canUserJoinAssociation($user, $association);
        $canManage = $user && $this->permissionService->canUserManageAssociationMembers($user, $association);
        
        $userRole = $user ? $this->permissionService->getUserRoleInAssociation($user, $association) : 'Visiteur';

        return $this->render('associations/show.html.twig', [
            'association' => $association,
            'can_join' => $canJoin,
            'can_manage' => $canManage,
            'user_role' => $userRole,
        ]);
    }

    /**
     * Edit association
     */
    #[Route('/associations/{id}/edit', name: 'associations_edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function edit(Request $request, Association $association): Response
    {
        $user = $this->getUser();
        
        // Check if user can edit this association
        if (!$this->permissionService->canUserEditAssociation($user, $association)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(AssociationType::class, $association);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            $this->addFlash('success', 'Association modifiée avec succès !');

            return $this->redirectToRoute('associations_show', ['id' => $association->getId()]);
        }

        return $this->render('associations/edit.html.twig', [
            'association' => $association,
            'form' => $form,
        ]);
    }

    /**
     * Request to join an association
     */
    #[Route('/associations/{id}/join', name: 'associations_join', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function join(Association $association): Response
    {
        $user = $this->getUser();
        
        $membership = $this->membershipService->requestMembership($user, $association);
        
        if ($membership) {
            $this->addFlash('success', 'Votre demande d\'adhésion à l\'association a été envoyée.');
        } else {
            $this->addFlash('error', 'Impossible de rejoindre cette association.');
        }

        return $this->redirectToRoute('associations_show', ['id' => $association->getId()]);
    }

    /**
     * Manage association members (for managers)
     */
    #[Route('/associations/{id}/manage', name: 'associations_manage', methods: ['GET'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function manage(Association $association): Response
    {
        $user = $this->getUser();
        
        // Check if user can manage this association
        if (!$this->permissionService->canUserManageAssociationMembers($user, $association)) {
            throw $this->createAccessDeniedException();
        }

        $pendingMembers = $this->membershipService->getPendingMemberships($association);
        $approvedMembers = $this->membershipService->getApprovedMembers($association);

        return $this->render('associations/manage.html.twig', [
            'association' => $association,
            'pending_members' => $pendingMembers,
            'approved_members' => $approvedMembers,
        ]);
    }

    /**
     * Approve membership request
     */
    #[Route('/associations/membership/{id}/approve', name: 'associations_membership_approve', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function approveMembership(AssociationMember $membership): Response
    {
        $user = $this->getUser();
        
        if ($this->membershipService->approveMembership($membership, $user)) {
            $this->addFlash('success', 'Membre approuvé avec succès.');
        } else {
            $this->addFlash('error', 'Impossible d\'approuver ce membre.');
        }

        return $this->redirectToRoute('associations_manage', ['id' => $membership->getAssociation()->getId()]);
    }

    /**
     * Reject membership request
     */
    #[Route('/associations/membership/{id}/reject', name: 'associations_membership_reject', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function rejectMembership(AssociationMember $membership): Response
    {
        $user = $this->getUser();
        
        if ($this->membershipService->rejectMembership($membership, $user)) {
            $this->addFlash('success', 'Demande rejetée.');
        } else {
            $this->addFlash('error', 'Impossible de rejeter cette demande.');
        }

        return $this->redirectToRoute('associations_manage', ['id' => $membership->getAssociation()->getId()]);
    }

    /**
     * Remove member from association
     */
    #[Route('/associations/membership/{id}/remove', name: 'associations_membership_remove', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function removeMember(AssociationMember $membership): Response
    {
        $user = $this->getUser();
        $associationId = $membership->getAssociation()->getId();
        
        if ($this->membershipService->removeMember($membership, $user)) {
            $this->addFlash('success', 'Membre retiré de l\'association.');
        } else {
            $this->addFlash('error', 'Impossible de retirer ce membre.');
        }

        return $this->redirectToRoute('associations_manage', ['id' => $associationId]);
    }

    /**
     * Promote member to manager
     */
    #[Route('/associations/membership/{id}/promote', name: 'associations_membership_promote', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function promoteMember(AssociationMember $membership): Response
    {
        $user = $this->getUser();
        
        if ($this->membershipService->promoteToManager($membership, $user)) {
            $this->addFlash('success', 'Membre promu gérant.');
        } else {
            $this->addFlash('error', 'Impossible de promouvoir ce membre.');
        }

        return $this->redirectToRoute('associations_manage', ['id' => $membership->getAssociation()->getId()]);
    }

    /**
     * Demote manager to member
     */
    #[Route('/associations/membership/{id}/demote', name: 'associations_membership_demote', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function demoteMember(AssociationMember $membership): Response
    {
        $user = $this->getUser();
        
        if ($this->membershipService->demoteToMember($membership, $user)) {
            $this->addFlash('success', 'Gérant rétrogradé en membre.');
        } else {
            $this->addFlash('error', 'Impossible de rétrograder ce gérant.');
        }

        return $this->redirectToRoute('associations_manage', ['id' => $membership->getAssociation()->getId()]);
    }
}
