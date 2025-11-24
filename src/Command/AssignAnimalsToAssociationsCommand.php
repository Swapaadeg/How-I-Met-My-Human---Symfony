<?php

namespace App\Command;

use App\Repository\AnimalsRepository;
use App\Repository\AssociationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:assign-animals-to-associations',
    description: 'Assign all animals without association to existing associations',
)]
class AssignAnimalsToAssociationsCommand extends Command
{
    public function __construct(
        private AnimalsRepository $animalsRepository,
        private AssociationRepository $associationRepository,
        private EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Get all associations
        $associations = $this->associationRepository->findAll();

        if (count($associations) === 0) {
            $io->error('No associations found in the database.');
            return Command::FAILURE;
        }

        $io->info(sprintf('Found %d associations', count($associations)));

        // Get all animals without association
        $animals = $this->animalsRepository->findBy(['association' => null]);

        if (count($animals) === 0) {
            $io->success('All animals are already assigned to associations!');
            return Command::SUCCESS;
        }

        $io->info(sprintf('Found %d animals without association', count($animals)));

        // Assign animals to associations in a round-robin fashion
        $associationIndex = 0;
        $assignedCount = 0;

        foreach ($animals as $animal) {
            $association = $associations[$associationIndex];
            $animal->setAssociation($association);

            $io->writeln(sprintf(
                'Assigning <info>%s</info> (%s) to <comment>%s</comment>',
                $animal->getName(),
                $animal->getSpecies()?->getName() ?? 'Unknown species',
                $association->getName()
            ));

            $assignedCount++;

            // Move to next association (round-robin)
            $associationIndex = ($associationIndex + 1) % count($associations);

            // Flush every 20 animals to avoid memory issues
            if ($assignedCount % 20 === 0) {
                $this->entityManager->flush();
            }
        }

        // Final flush
        $this->entityManager->flush();

        $io->success(sprintf('Successfully assigned %d animals to %d associations!', $assignedCount, count($associations)));

        // Show summary
        $io->section('Summary by Association');
        foreach ($associations as $association) {
            $count = count($this->animalsRepository->findBy(['association' => $association]));
            $io->writeln(sprintf('- <comment>%s</comment>: %d animals', $association->getName(), $count));
        }

        return Command::SUCCESS;
    }
}
