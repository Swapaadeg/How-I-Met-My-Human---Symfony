<?php

namespace App\Entity;

use App\Repository\AssociationMemberRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AssociationMemberRepository::class)]
class AssociationMember
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_APPROVED = 'approved';
    public const STATUS_REJECTED = 'rejected';

    public const ROLE_MANAGER = 'manager';
    public const ROLE_MEMBER = 'member';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'associationMembers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'associationMembers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Association $association = null;

    #[ORM\Column(length: 20)]
    private ?string $status = self::STATUS_PENDING;

    #[ORM\Column(length: 20)]
    private ?string $role = self::ROLE_MEMBER;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTime $created_at = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTime $approved_at = null;

    #[ORM\ManyToOne]
    private ?User $approved_by = null;

    public function __construct()
    {
        $this->created_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getAssociation(): ?Association
    {
        return $this->association;
    }

    public function setAssociation(?Association $association): static
    {
        $this->association = $association;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTime $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getApprovedAt(): ?\DateTime
    {
        return $this->approved_at;
    }

    public function setApprovedAt(?\DateTime $approved_at): static
    {
        $this->approved_at = $approved_at;

        return $this;
    }

    public function getApprovedBy(): ?User
    {
        return $this->approved_by;
    }

    public function setApprovedBy(?User $approved_by): static
    {
        $this->approved_by = $approved_by;

        return $this;
    }

    public function isApproved(): bool
    {
        return $this->status === self::STATUS_APPROVED;
    }

    public function isPending(): bool
    {
        return $this->status === self::STATUS_PENDING;
    }

    public function isManager(): bool
    {
        return $this->role === self::ROLE_MANAGER;
    }

    public function approve(User $approver): void
    {
        $this->status = self::STATUS_APPROVED;
        $this->approved_at = new \DateTime();
        $this->approved_by = $approver;
    }

    public function reject(): void
    {
        $this->status = self::STATUS_REJECTED;
    }
}