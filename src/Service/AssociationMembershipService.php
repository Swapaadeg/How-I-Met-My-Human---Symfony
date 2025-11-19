<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Association;
use App\Entity\AssociationMember;
use App\Repository\AssociationMemberRepository;
use Doctrine\ORM\EntityManagerInterface;

class AssociationMembershipService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private AssociationMemberRepository $associationMemberRepository,
        private PermissionService $permissionService
    ) {
    }

    /**
     * Request membership to an association
     */
    public function requestMembership(User $user, Association $association): ?AssociationMember
    {
        // Check if user can join this association
        if (!$this->permissionService->canUserJoinAssociation($user, $association)) {
            return null;
        }

        // Create membership request
        $membership = new AssociationMember();
        $membership->setUser($user);
        $membership->setAssociation($association);
        $membership->setStatus(AssociationMember::STATUS_PENDING);
        $membership->setRole(AssociationMember::ROLE_MEMBER);

        $this->entityManager->persist($membership);
        $this->entityManager->flush();

        return $membership;
    }

    /**
     * Approve membership request
     */
    public function approveMembership(AssociationMember $membership, User $approver): bool
    {
        // Check permissions
        if (!$this->permissionService->canUserApproveMembership($approver, $membership)) {
            return false;
        }

        $membership->approve($approver);
        
        // Update user roles based on new membership
        $membership->getUser()->updateRolesFromMemberships();

        $this->entityManager->flush();

        return true;
    }

    /**
     * Reject membership request
     */
    public function rejectMembership(AssociationMember $membership, User $rejector): bool
    {
        // Check permissions
        if (!$this->permissionService->canUserApproveMembership($rejector, $membership)) {
            return false;
        }

        $membership->reject();
        $this->entityManager->flush();

        return true;
    }

    /**
     * Remove member from association
     */
    public function removeMember(AssociationMember $membership, User $remover): bool
    {
        // Check permissions
        if (!$this->permissionService->canUserRemoveMember($remover, $membership)) {
            return false;
        }

        $user = $membership->getUser();
        
        $this->entityManager->remove($membership);
        
        // Update user roles after removal
        $user->updateRolesFromMemberships();
        
        $this->entityManager->flush();

        return true;
    }

    /**
     * Promote member to manager
     */
    public function promoteToManager(AssociationMember $membership, User $promoter): bool
    {
        // Check permissions - only admin or existing managers can promote
        if (!$this->permissionService->canUserManageAssociationMembers($promoter, $membership->getAssociation())) {
            return false;
        }

        $membership->setRole(AssociationMember::ROLE_MANAGER);
        
        // Update user roles
        $membership->getUser()->updateRolesFromMemberships();

        $this->entityManager->flush();

        return true;
    }

    /**
     * Demote manager to member
     */
    public function demoteToMember(AssociationMember $membership, User $demoter): bool
    {
        // Check permissions - only admin or other managers can demote
        if (!$this->permissionService->canUserManageAssociationMembers($demoter, $membership->getAssociation())) {
            return false;
        }

        $membership->setRole(AssociationMember::ROLE_MEMBER);
        
        // Update user roles
        $membership->getUser()->updateRolesFromMemberships();

        $this->entityManager->flush();

        return true;
    }

    /**
     * Get pending membership requests for an association
     */
    public function getPendingMemberships(Association $association): array
    {
        return $this->associationMemberRepository->findPendingMembershipsByAssociation($association);
    }

    /**
     * Get approved members for an association
     */
    public function getApprovedMembers(Association $association): array
    {
        return $this->associationMemberRepository->findApprovedMembersByAssociation($association);
    }
}