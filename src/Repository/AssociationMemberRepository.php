<?php

namespace App\Repository;

use App\Entity\AssociationMember;
use App\Entity\User;
use App\Entity\Association;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AssociationMember>
 */
class AssociationMemberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AssociationMember::class);
    }

    /**
     * Find membership for a user in a specific association
     */
    public function findMembershipByUserAndAssociation(User $user, Association $association): ?AssociationMember
    {
        return $this->createQueryBuilder('am')
            ->andWhere('am.user = :user')
            ->andWhere('am.association = :association')
            ->setParameter('user', $user)
            ->setParameter('association', $association)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Find all approved memberships for a user
     */
    public function findApprovedMembershipsByUser(User $user): array
    {
        return $this->createQueryBuilder('am')
            ->andWhere('am.user = :user')
            ->andWhere('am.status = :status')
            ->setParameter('user', $user)
            ->setParameter('status', AssociationMember::STATUS_APPROVED)
            ->getQuery()
            ->getResult();
    }

    /**
     * Find all pending memberships for an association
     */
    public function findPendingMembershipsByAssociation(Association $association): array
    {
        return $this->createQueryBuilder('am')
            ->andWhere('am.association = :association')
            ->andWhere('am.status = :status')
            ->setParameter('association', $association)
            ->setParameter('status', AssociationMember::STATUS_PENDING)
            ->getQuery()
            ->getResult();
    }

    /**
     * Find all approved members of an association
     */
    public function findApprovedMembersByAssociation(Association $association): array
    {
        return $this->createQueryBuilder('am')
            ->andWhere('am.association = :association')
            ->andWhere('am.status = :status')
            ->setParameter('association', $association)
            ->setParameter('status', AssociationMember::STATUS_APPROVED)
            ->getQuery()
            ->getResult();
    }

    /**
     * Check if user is a manager of an association
     */
    public function isUserManagerOfAssociation(User $user, Association $association): bool
    {
        $membership = $this->createQueryBuilder('am')
            ->andWhere('am.user = :user')
            ->andWhere('am.association = :association')
            ->andWhere('am.status = :status')
            ->andWhere('am.role = :role')
            ->setParameter('user', $user)
            ->setParameter('association', $association)
            ->setParameter('status', AssociationMember::STATUS_APPROVED)
            ->setParameter('role', AssociationMember::ROLE_MANAGER)
            ->getQuery()
            ->getOneOrNullResult();

        return $membership !== null;
    }
}