<?php

namespace App\Entity;

use App\Repository\AssociationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: AssociationRepository::class)]
class Association
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column]
    private ?int $code_postal = null;

    #[ORM\Column(length: 255)]
    private ?string $contact_email = null;

    #[Vich\UploadableField(mapping: 'images', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTime $updatedAt = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'association')]
    private Collection $user;

    /**
     * @var Collection<int, AssociationMember>
     */
    #[ORM\OneToMany(targetEntity: AssociationMember::class, mappedBy: 'association')]
    private Collection $associationMembers;

    /**
     * @var Collection<int, Animals>
     */
    #[ORM\OneToMany(targetEntity: Animals::class, mappedBy: 'association')]
    private Collection $animals;

    #[ORM\ManyToOne(inversedBy: 'association')]
    private ?Department $department = null;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->associationMembers = new ArrayCollection();
        $this->animals = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCodePostal(): ?int
    {
        return $this->code_postal;
    }

    public function setCodePostal(int $code_postal): static
    {
        $this->code_postal = $code_postal;

        return $this;
    }

    public function getContactEmail(): ?string
    {
        return $this->contact_email;
    }

    public function setContactEmail(string $contact_email): static
    {
        $this->contact_email = $contact_email;

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

    /**
     * @return Collection<int, User>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): static
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
            $user->setAssociation($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->user->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getAssociation() === $this) {
                $user->setAssociation(null);
            }
        }

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
            $associationMember->setAssociation($this);
        }

        return $this;
    }

    public function removeAssociationMember(AssociationMember $associationMember): static
    {
        if ($this->associationMembers->removeElement($associationMember)) {
            // set the owning side to null (unless already changed)
            if ($associationMember->getAssociation() === $this) {
                $associationMember->setAssociation(null);
            }
        }

        return $this;
    }

    /**
     * Get all approved members
     */
    public function getApprovedMembers(): array
    {
        $approvedMembers = [];
        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved()) {
                $approvedMembers[] = $membership;
            }
        }
        return $approvedMembers;
    }

    /**
     * Get all pending members
     */
    public function getPendingMembers(): array
    {
        $pendingMembers = [];
        foreach ($this->associationMembers as $membership) {
            if ($membership->isPending()) {
                $pendingMembers[] = $membership;
            }
        }
        return $pendingMembers;
    }

    /**
     * Get all managers
     */
    public function getManagers(): array
    {
        $managers = [];
        foreach ($this->associationMembers as $membership) {
            if ($membership->isApproved() && $membership->isManager()) {
                $managers[] = $membership;
            }
        }
        return $managers;
    }

    /**
     * @return Collection<int, Animals>
     */
    public function getAnimals(): Collection
    {
        return $this->animals;
    }

    public function addAnimal(Animals $animal): static
    {
        if (!$this->animals->contains($animal)) {
            $this->animals->add($animal);
            $animal->setAssociation($this);
        }

        return $this;
    }

    public function removeAnimal(Animals $animal): static
    {
        if ($this->animals->removeElement($animal)) {
            // set the owning side to null (unless already changed)
            if ($animal->getAssociation() === $this) {
                $animal->setAssociation(null);
            }
        }

        return $this;
    }

    public function getDepartment(): ?Department
    {
        return $this->department;
    }

    public function setDepartment(?Department $department): static
    {
        $this->department = $department;

        return $this;
    }
}
