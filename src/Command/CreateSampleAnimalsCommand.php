<?php

namespace App\Command;

use App\Entity\Animals;
use App\Entity\Species;
use App\Entity\Tags;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:create-sample-animals',
    description: 'Create sample animals for testing the cards display',
)]
class CreateSampleAnimalsCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        // Créer des espèces si elles n'existent pas
        $this->createSpeciesIfNotExists();
        
        // Créer des tags si ils n'existent pas
        $this->createTagsIfNotExists();
        
        // Créer des animaux d'exemple
        $this->createSampleAnimals($io);

        $io->success('Sample animals created successfully!');
        return Command::SUCCESS;
    }
    
    private function createSpeciesIfNotExists(): void
    {
        $speciesData = ['Chien', 'Chat', 'Lapin', 'Oiseau'];
        
        foreach ($speciesData as $name) {
            $existingSpecies = $this->entityManager->getRepository(Species::class)
                ->findOneBy(['name' => $name]);
            
            if (!$existingSpecies) {
                $species = new Species();
                $species->setName($name);
                $this->entityManager->persist($species);
            }
        }
        
        $this->entityManager->flush();
    }
    
    private function createTagsIfNotExists(): void
    {
        $tagsData = [
            'Sociable', 'Calme', 'Joueur', 'Câlin', 'Énergique',
            'Bon avec les enfants', 'Bon avec les chats', 'Bon avec les chiens',
            'Éducation en cours', 'Propre', 'Peureux', 'Confiant'
        ];
        
        foreach ($tagsData as $type) {
            $existingTag = $this->entityManager->getRepository(Tags::class)
                ->findOneBy(['type' => $type]);
            
            if (!$existingTag) {
                $tag = new Tags();
                $tag->setType($type);
                $this->entityManager->persist($tag);
            }
        }
        
        $this->entityManager->flush();
    }
    
    private function createSampleAnimals(SymfonyStyle $io): void
    {
        $animalsData = [
            [
                'name' => 'Melchior',
                'age' => '2 ans',
                'sexe' => 'male',
                'species' => 'Chien',
                'description' => 'Melchior est un adorable chien de 2 ans, très sociable et plein de vie. Il adore jouer avec les enfants et est parfait pour une famille active. C\'est un compagnon loyal qui saura apporter beaucoup de bonheur dans votre foyer. Il connaît déjà quelques commandes de base et continue son éducation.',
                'tags' => ['Sociable', 'Joueur', 'Bon avec les enfants']
            ],
            [
                'name' => 'Brasix',
                'age' => 'Adulte',
                'sexe' => 'male',
                'species' => 'Chat',
                'description' => 'Brasix est un chat très câlin qui adore les moments de tendresse. C\'est un compagnon idéal pour quelqu\'un qui recherche un animal calme et affectueux. Il s\'entend bien avec les autres chats et apprécie les longues siestes au soleil. Son ronronnement apaisera vos soirées.',
                'tags' => ['Câlin', 'Calme', 'Bon avec les chats']
            ],
            [
                'name' => 'Boleo',
                'age' => '6 mois',
                'sexe' => 'male',
                'species' => 'Chien',
                'description' => 'Boleo est un jeune chiot plein d\'énergie et de curiosité. Il découvre le monde avec enthousiasme et montre déjà de très bons progrès dans son éducation. Il sera parfait pour une famille qui a du temps à lui consacrer et qui souhaite l\'accompagner dans son apprentissage.',
                'tags' => ['Énergique', 'Éducation en cours', 'Joueur']
            ],
            [
                'name' => 'Luna',
                'age' => '1 an',
                'sexe' => 'femelle',
                'species' => 'Chat',
                'description' => 'Luna est une jeune chatte gracieuse et indépendante. Elle aime observer le monde depuis son perchoir favori et apprécie les caresses quand elle en a envie. C\'est une compagne discrète mais attachante qui saura conquérir votre cœur petit à petit.',
                'tags' => ['Calme', 'Indépendante', 'Câlin']
            ],
            [
                'name' => 'Rocky',
                'age' => '5 ans',
                'sexe' => 'male',
                'species' => 'Chien',
                'description' => 'Rocky est un chien mature et équilibré qui recherche une famille tranquille. Il aime les promenades paisibles et les moments de détente. C\'est un compagnon fidèle qui s\'adapte facilement à son environnement et qui apprécie la routine.',
                'tags' => ['Calme', 'Propre', 'Confiant']
            ]
        ];
        
        foreach ($animalsData as $data) {
            // Vérifier si l'animal n'existe pas déjà
            $existingAnimal = $this->entityManager->getRepository(Animals::class)
                ->findOneBy(['name' => $data['name']]);
            
            if ($existingAnimal) {
                $io->note("L'animal {$data['name']} existe déjà, passage au suivant.");
                continue;
            }
            
            $animal = new Animals();
            $animal->setName($data['name']);
            $animal->setAge($data['age']);
            $animal->setSexe($data['sexe']);
            $animal->setDescription($data['description']);
            $animal->setDateArrivee(new \DateTime('-' . rand(1, 60) . ' days'));
            
            // Associer l'espèce
            $species = $this->entityManager->getRepository(Species::class)
                ->findOneBy(['name' => $data['species']]);
            if ($species) {
                $animal->setSpecies($species);
            }
            
            // Associer les tags
            foreach ($data['tags'] as $tagName) {
                $tag = $this->entityManager->getRepository(Tags::class)
                    ->findOneBy(['type' => $tagName]);
                if ($tag) {
                    $animal->addTag($tag);
                }
            }
            
            $this->entityManager->persist($animal);
            $io->text("Animal créé: {$data['name']}");
        }
        
        $this->entityManager->flush();
    }
}