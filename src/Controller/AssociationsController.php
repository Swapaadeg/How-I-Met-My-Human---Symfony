<?php

namespace App\Controller;

use App\Entity\Association;
use App\Entity\AssociationMember;
use App\Entity\User;
use App\Form\AssociationType;
use App\Form\AssociationJoinRequestType;
use App\Service\AssociationMembershipService;
use App\Service\PermissionService;
use App\Repository\AssociationRepository;
use App\Repository\AssociationMemberRepository;
use App\Repository\DepartmentRepository;
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
        private DepartmentRepository $departmentRepository,
        private EntityManagerInterface $entityManager
    ) {
    }

    /**
     * List all associations (public)
     */
    #[Route('/associations', name: 'associations')]
    public function index(Request $request): Response
    {
        // Get department filter from query parameter
        $departmentId = $request->query->get('department');

        // Filter associations by department if specified
        if ($departmentId) {
            $associations = $this->associationRepository->findBy(['department' => $departmentId]);
        } else {
            $associations = $this->associationRepository->findAll();
        }

        // Get all departments for the filter dropdown
        $departments = $this->departmentRepository->findBy([], ['name' => 'ASC']);

        // Sort associations: user's associations first
        $user = $this->getUser();
        $userAssociationIds = [];
        if ($user) {
            foreach ($user->getAssociationMembers() as $membership) {
                if ($membership->isApproved()) {
                    $userAssociationIds[] = $membership->getAssociation()->getId();
                }
            }
        }

        // Sort: user's associations first, then others
        usort($associations, function($a, $b) use ($userAssociationIds) {
            $aIsUser = in_array($a->getId(), $userAssociationIds);
            $bIsUser = in_array($b->getId(), $userAssociationIds);

            if ($aIsUser && !$bIsUser) return -1;
            if (!$aIsUser && $bIsUser) return 1;
            return 0;
        });

        return $this->render('associations/index.html.twig', [
            'associations' => $associations,
            'departments' => $departments,
            'selected_department' => $departmentId,
            'user_association_ids' => $userAssociationIds,
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
            $this->entityManager->flush();

            // Refresh user to reload associationMembers collection from database
            $this->entityManager->refresh($user);

            // Update user roles now that the membership is in the collection
            if ($user instanceof User) {
                $user->updateRolesFromMemberships();
                $this->entityManager->flush();
            }

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

        // Check if user has a pending membership request
        $pendingMembership = null;
        $userFavoriteIds = [];
        if ($user) {
            $pendingMembership = $this->associationMemberRepository->findOneBy([
                'user' => $user,
                'association' => $association,
                'status' => AssociationMember::STATUS_PENDING
            ]);

            // Get all favorite animal IDs for this user
            $favorites = $user->getFavorites();
            foreach ($favorites as $favorite) {
                $userFavoriteIds[] = $favorite->getAnimals()->getId();
            }
        }

        return $this->render('associations/show.html.twig', [
            'association' => $association,
            'can_join' => $canJoin,
            'can_manage' => $canManage,
            'user_role' => $userRole,
            'pending_membership' => $pendingMembership,
            'user_favorite_ids' => $userFavoriteIds,
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
     * Show form to request joining an association
     */
    #[Route('/associations/{id}/join', name: 'associations_join', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function join(Association $association): Response
    {
        $user = $this->getUser();

        // Check if user can join this association
        if (!$this->permissionService->canUserJoinAssociation($user, $association)) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas rejoindre cette association.');
        }

        $form = $this->createForm(AssociationJoinRequestType::class);

        return $this->render('associations/join.html.twig', [
            'association' => $association,
            'form' => $form,
        ]);
    }

    /**
     * Submit join request with message
     */
    #[Route('/associations/{id}/join-request', name: 'associations_join_submit', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function submitJoinRequest(Request $request, Association $association): Response
    {
        $user = $this->getUser();

        // Check if user can join this association
        if (!$this->permissionService->canUserJoinAssociation($user, $association)) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas rejoindre cette association.');
        }

        $form = $this->createForm(AssociationJoinRequestType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $message = $data['message'] ?? null;

            // Create membership with message
            $membership = new AssociationMember();
            $membership->setUser($user);
            $membership->setAssociation($association);
            $membership->setMessage($message);
            $membership->setStatus(AssociationMember::STATUS_PENDING);
            $membership->setRole(AssociationMember::ROLE_MEMBER);

            $this->entityManager->persist($membership);
            $this->entityManager->flush();

            $this->addFlash('success', sprintf('Votre demande a bien été envoyée à l\'association %s', $association->getName()));

            return $this->redirectToRoute('associations_show', ['id' => $association->getId()]);
        }

        return $this->render('associations/join.html.twig', [
            'association' => $association,
            'form' => $form,
        ]);
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

    /**
     * Delete an association
     */
    #[Route('/associations/{id}/delete', name: 'associations_delete', methods: ['POST'])]
    #[IsGranted('ROLE_ASSOCIATION_MANAGER')]
    public function delete(Association $association): Response
    {
        $user = $this->getUser();

        // Check if user can delete this association
        if (!$this->permissionService->canUserEditAssociation($user, $association)) {
            $this->addFlash('error', 'Vous n\'avez pas les droits pour supprimer cette association.');
            return $this->redirectToRoute('association_show', ['id' => $association->getId()]);
        }

        // Delete all related animals first
        foreach ($association->getAnimals() as $animal) {
            // Delete related favorites
            foreach ($animal->getFavorites() as $favorite) {
                $this->entityManager->remove($favorite);
            }
            // Delete related comments
            foreach ($animal->getComments() as $comment) {
                $this->entityManager->remove($comment);
            }
            $this->entityManager->remove($animal);
        }

        // Delete all memberships
        foreach ($association->getMembers() as $membership) {
            $this->entityManager->remove($membership);
        }

        // Delete the association
        $this->entityManager->remove($association);
        $this->entityManager->flush();

        // Update user roles
        if ($user instanceof \App\Entity\User) {
            $this->entityManager->refresh($user);
            $user->updateRolesFromMemberships();
            $this->entityManager->flush();
        }

        $this->addFlash('success', 'L\'association a été supprimée avec succès.');

        return $this->redirectToRoute('associations');
    }
}
