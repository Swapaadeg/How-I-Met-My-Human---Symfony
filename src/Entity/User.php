<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTime $updatedAt = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $resetToken = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTime $resetTokenExpiresAt = null;

    #[ORM\ManyToOne(inversedBy: 'user')]
    private ?Association $association = null;

    /**
     * @var Collection<int, AssociationMember>
     */
    #[ORM\OneToMany(targetEntity: AssociationMember::class, mappedBy: 'user')]
    private Collection $associationMembers;

    /**
     * @var Collection<int, Favorites>
     */
    #[ORM\OneToMany(targetEntity: Favorites::class, mappedBy: 'user')]
    private Collection $favorites;

    /**
     * @var Collection<int, Comments>
     */
    #[ORM\OneToMany(targetEntity: Comments::class, mappedBy: 'user')]
    private Collection $comments;

    /**
     * @var Collection<int, AdopterNews>
     */
    #[ORM\OneToMany(targetEntity: AdopterNews::class, mappedBy: 'user', orphanRemoval: true)]
    private Collection $adopterNews;

    public function __construct()
    {
        $this->associationMembers = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->adopterNews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        // Add roles based on association membership
        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved()) {
                $roles[] = 'ROLE_ASSOCIATION_MEMBER';

                if ($membership->isManager()) {
                    $roles[] = 'ROLE_ASSOCIATION_MANAGER';
                }
            }
        }

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    #[\Deprecated]
    public function eraseCredentials(): void
    {
        // @deprecated, to be removed when upgrading to Symfony 8
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            $this->updatedAt = new \DateTime();
        }
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(?string $imageName): static
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTime $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(?string $resetToken): static
    {
        $this->resetToken = $resetToken;

        return $this;
    }

    public function getResetTokenExpiresAt(): ?\DateTime
    {
        return $this->resetTokenExpiresAt;
    }

    public function setResetTokenExpiresAt(?\DateTime $resetTokenExpiresAt): static
    {
        $this->resetTokenExpiresAt = $resetTokenExpiresAt;

        return $this;
    }

    public function isResetTokenValid(): bool
    {
        return $this->resetTokenExpiresAt && $this->resetTokenExpiresAt > new \DateTime();
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

    /**
     * @return Collection<int, AssociationMember>
     */
    public function getAssociationMembers(): Collection
    {
        return $this->associationMembers;
    }

    public function addAssociationMember(AssociationMember $associationMember): static
    {
        if (!$this->associationMembers->contains($associationMember)) {
            $this->associationMembers->add($associationMember);
            $associationMember->setUser($this);
        }

        return $this;
    }

    public function removeAssociationMember(AssociationMember $associationMember): static
    {
        if ($this->associationMembers->removeElement($associationMember)) {
            // set the owning side to null (unless already changed)
            if ($associationMember->getUser() === $this) {
                $associationMember->setUser(null);
            }
        }

        return $this;
    }

    /**
     * Check if user has admin role
     */
    public function isAdmin(): bool
    {
        return in_array('ROLE_ADMIN', $this->roles);
    }

    /**
     * Check if user is a visitor (basic user without association)
     */
    public function isVisitor(): bool
    {
        return count($this->getApprovedAssociations()) === 0 && !$this->isAdmin();
    }

    /**
     * Add admin role
     */
    public function setAsAdmin(): static
    {
        if (!in_array('ROLE_ADMIN', $this->roles)) {
            $this->roles[] = 'ROLE_ADMIN';
        }
        return $this;
    }

    /**
     * Remove all special roles (keeps only ROLE_USER)
     */
    public function setAsVisitor(): static
    {
        // Remove all roles except admin
        $this->roles = array_filter($this->roles, function($role) {
            return $role === 'ROLE_ADMIN';
        });
        return $this;
    }

    /**
     * Update user roles based on association memberships
     */
    public function updateRolesFromMemberships(): static
    {
        // Remove association-related roles first
        $this->roles = array_filter($this->roles, function($role) {
            return !in_array($role, [
                'ROLE_ASSOCIATION_MANAGER',
                'ROLE_ASSOCIATION_MEMBER'
            ]);
        });

        // Don't touch admin role
        if ($this->isAdmin()) {
            return $this;
        }

        $hasApprovedMembership = false;
        $isManager = false;

        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved()) {
                $hasApprovedMembership = true;
                if ($membership->isManager()) {
                    $isManager = true;
                }
            }
        }

        if ($hasApprovedMembership) {
            if ($isManager) {
                $this->roles[] = 'ROLE_ASSOCIATION_MANAGER';
            } else {
                $this->roles[] = 'ROLE_ASSOCIATION_MEMBER';
            }
        }
        // Si pas de membership, l'utilisateur garde juste ROLE_USER (ajouté automatiquement dans getRoles())

        return $this;
    }

    /**
     * Check if user is manager of at least one association
     */
    public function isAssociationManager(): bool
    {
        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved() && $membership->isManager()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Check if user is manager of a specific association
     */
    public function isManagerOfAssociation(Association $association): bool
    {
        foreach ($this->associationMembers as $membership) {
            if ($membership->getAssociation() === $association 
                && $membership->isApproved() 
                && $membership->isManager()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Check if user is member (approved) of a specific association
     */
    public function isMemberOfAssociation(Association $association): bool
    {
        foreach ($this->associationMembers as $membership) {
            if ($membership->getAssociation() === $association && $membership->isApproved()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Get all associations where user is approved member
     */
    public function getApprovedAssociations(): array
    {
        $associations = [];
        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved()) {
                $associations[] = $membership->getAssociation();
            }
        }
        return $associations;
    }

    /**
     * @return Collection<int, Favorites>
     */
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    public function addFavorite(Favorites $favorite): static
    {
        if (!$this->favorites->contains($favorite)) {
            $this->favorites->add($favorite);
            $favorite->setUser($this);
        }

        return $this;
    }

    public function removeFavorite(Favorites $favorite): static
    {
        if ($this->favorites->removeElement($favorite)) {
            // set the owning side to null (unless already changed)
            if ($favorite->getUser() === $this) {
                $favorite->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Comments>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setUser($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getUser() === $this) {
                $comment->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AdopterNews>
     */
    public function getAdopterNews(): Collection
    {
        return $this->adopterNews;
    }

    public function addAdopterNews(AdopterNews $adopterNews): static
    {
        if (!$this->adopterNews->contains($adopterNews)) {
            $this->adopterNews->add($adopterNews);
            $adopterNews->setUser($this);
        }

        return $this;
    }

    public function removeAdopterNews(AdopterNews $adopterNews): static
    {
        if ($this->adopterNews->removeElement($adopterNews)) {
            // set the owning side to null (unless already changed)
            if ($adopterNews->getUser() === $this) {
                $adopterNews->setUser(null);
            }
        }

        return $this;
    }
}
