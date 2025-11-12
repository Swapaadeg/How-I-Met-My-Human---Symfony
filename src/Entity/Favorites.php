<?php

namespace App\Entity;

use App\Repository\FavoritesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavoritesRepository::class)]
#[ORM\Table(name: "favorites")]
class Favorites
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'favorites')]
    private ?user $user = null;

    #[ORM\ManyToOne(inversedBy: 'favorites')]
    private ?animals $animals = null;

    public function getId(): ?int
    {
        return $this->id;
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
