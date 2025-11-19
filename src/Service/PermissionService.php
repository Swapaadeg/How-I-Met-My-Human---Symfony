<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\Association;
use App\Entity\Animals;
use App\Entity\AssociationMember;
use App\Entity\UserRole;
use App\Repository\AssociationMemberRepository;

class PermissionService
{
    public function __construct(
        private AssociationMemberRepository $associationMemberRepository
    ) {
    }

    /**
     * Check if user can manage animals of a specific association
     */
    public function canUserManageAssociationAnimals(User $user, Association $association): bool
    {
        // Admin can manage all animals
        if ($user->isAdmin()) {
            return true;
        }

        // Check if user is approved member or manager of the association
        return $user->isMemberOfAssociation($association);
    }

    /**
     * Check if user can manage a specific animal
     */
    public function canUserManageAnimal(User $user, Animals $animal): bool
    {
        return $animal->canUserManage($user);
    }

    /**
     * Check if user can manage association members (approve/reject/remove)
     */
    public function canUserManageAssociationMembers(User $user, Association $association): bool
    {
        // Admin can manage all associations
        if ($user->isAdmin()) {
            return true;
        }

        // Only association managers can manage members
        return $user->isManagerOfAssociation($association);
    }

    /**
     * Check if user can create new associations
     */
    public function canUserCreateAssociation(User $user): bool
    {
        // Admins and association managers can create new associations
        return $user->isAdmin() || $user->isAssociationManager();
    }

    /**
     * Check if user can edit association details
     */
    public function canUserEditAssociation(User $user, Association $association): bool
    {
        // Admin can edit all associations
        if ($user->isAdmin()) {
            return true;
        }

        // Only association managers can edit their association
        return $user->isManagerOfAssociation($association);
    }

    /**
     * Check if user can join an association
     */
    public function canUserJoinAssociation(User $user, Association $association): bool
    {
        // Admin doesn't need to join associations
        if ($user->isAdmin()) {
            return false;
        }

        // Check if user is not already a member
        $existingMembership = $this->associationMemberRepository
            ->findMembershipByUserAndAssociation($user, $association);

        return $existingMembership === null;
    }

    /**
     * Check if user can approve/reject membership requests
     */
    public function canUserApproveMembership(User $user, AssociationMember $membership): bool
    {
        return $this->canUserManageAssociationMembers($user, $membership->getAssociation());
    }

    /**
     * Check if user can remove a member from an association
     */
    public function canUserRemoveMember(User $user, AssociationMember $membership): bool
    {
        $association = $membership->getAssociation();
        
        // Admin can remove anyone
        if ($user->isAdmin()) {
            return true;
        }

        // Association managers can remove members (but not other managers)
        if ($user->isManagerOfAssociation($association)) {
            // Cannot remove other managers
            return !$membership->isManager();
        }

        return false;
    }

    /**
     * Get user's role display name based on association context
     */
    public function getUserRoleInAssociation(User $user, Association $association): string
    {
        if ($user->isAdmin()) {
            return 'Administrateur';
        }

        if ($user->isManagerOfAssociation($association)) {
            return 'Gérant';
        }

        if ($user->isMemberOfAssociation($association)) {
            return 'Membre';
        }

        return 'Visiteur';
    }

    /**
     * Get associations where user can manage animals
     */
    public function getAssociationsWhereUserCanManageAnimals(User $user): array
    {
        if ($user->isAdmin()) {
            // Admin can manage all associations - this would need a repository call
            // For now, return user's approved associations
            return $user->getApprovedAssociations();
        }

        return $user->getApprovedAssociations();
    }
}