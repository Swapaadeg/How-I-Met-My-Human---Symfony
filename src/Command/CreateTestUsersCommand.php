<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-test-users',
    description: 'Create test users with password 123456',
)]
class CreateTestUsersCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // List of test users to create
        $testUsers = [
            ['email' => 'user1@example.com', 'name' => 'Alice Dupont'],
            ['email' => 'user2@example.com', 'name' => 'Bob Martin'],
            ['email' => 'user3@example.com', 'name' => 'Charlie Durand'],
            ['email' => 'user4@example.com', 'name' => 'Diana Laurent'],
            ['email' => 'user5@example.com', 'name' => 'Etienne Moreau'],
            ['email' => 'user6@example.com', 'name' => 'Florence Petit'],
            ['email' => 'user7@example.com', 'name' => 'Gabriel Roux'],
            ['email' => 'user8@example.com', 'name' => 'Hélène Gérard'],
            ['email' => 'user9@example.com', 'name' => 'Isabelle Blanc'],
            ['email' => 'user10@example.com', 'name' => 'Jacques Fournier'],
        ];

        $password = '123456';
        $createdCount = 0;
        $skippedCount = 0;

        $io->title('Creating Test Users');

        foreach ($testUsers as $userData) {
            // Check if user already exists
            $existingUser = $this->entityManager->getRepository(User::class)
                ->findOneBy(['email' => $userData['email']]);

            if ($existingUser) {
                $io->note("User {$userData['email']} already exists, skipping...");
                $skippedCount++;
                continue;
            }

            // Create new user
            $user = new User();
            $user->setEmail($userData['email']);
            $user->setName($userData['name']);

            // Hash the password
            $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
            $user->setPassword($hashedPassword);

            $this->entityManager->persist($user);
            $io->text("✓ Created user: {$userData['email']} ({$userData['name']})");
            $createdCount++;
        }

        // Flush all changes
        $this->entityManager->flush();

        $io->success("Test users creation completed!");
        $io->table(
            ['Metric', 'Count'],
            [
                ['Created', $createdCount],
                ['Skipped (already exist)', $skippedCount],
                ['Total', count($testUsers)],
            ]
        );

        return Command::SUCCESS;
    }
}
