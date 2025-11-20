<?php

namespace App\Repository;

use App\Entity\AdopterNews;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AdopterNews>
 */
class AdopterNewsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AdopterNews::class);
    }

    /**
     * @return AdopterNews[] Returns an array of the most recent AdopterNews
     */
    public function findLatest(int $limit = 20): array
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
