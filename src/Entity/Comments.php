<?php

namespace App\Entity;

use App\Repository\CommentsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentsRepository::class)]
class Comments
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTime $date_ajout = null;

    #[ORM\Column(length: 255)]
    private ?string $text = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    private ?user $user = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    private ?animals $animals = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateAjout(): ?\DateTime
    {
        return $this->date_ajout;
    }

    public function setDateAjout(\DateTime $date_ajout): static
    {
        $this->date_ajout = $date_ajout;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): static
    {
        $this->text = $text;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getAnimals(): ?animals
    {
        return $this->animals;
    }

    public function setAnimals(?animals $animals): static
    {
        $this->animals = $animals;

        return $this;
    }
}
