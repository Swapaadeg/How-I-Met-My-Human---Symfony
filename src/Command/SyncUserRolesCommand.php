<?php

namespace App\Command;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:sync-user-roles',
    description: 'Synchronize user roles based on their association memberships',
)]
class SyncUserRolesCommand extends Command
{
    public function __construct(
        private UserRepository $userRepository,
        private EntityManagerInterface $entityManager
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $users = $this->userRepository->findAll();
        $updated = 0;

        $io->title('Synchronizing user roles from association memberships');

        foreach ($users as $user) {
            $rolesBefore = $user->getRoles();

            // Update roles based on memberships
            $user->updateRolesFromMemberships();

            $rolesAfter = $user->getRoles();

            // Check if roles changed
            sort($rolesBefore);
            sort($rolesAfter);

            if ($rolesBefore !== $rolesAfter) {
                $io->writeln(sprintf(
                    'User: %s (%s)',
                    $user->getName(),
                    $user->getEmail()
                ));
                $io->writeln(sprintf('  Before: %s', json_encode($rolesBefore)));
                $io->writeln(sprintf('  After:  %s', json_encode($rolesAfter)));
                $updated++;
            }
        }

        $this->entityManager->flush();

        $io->success(sprintf('Updated %d user(s) roles', $updated));

        return Command::SUCCESS;
    }
}
