<?php

namespace App\Command;

use App\Entity\User;
use App\Entity\UserRole;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-admin',
    description: 'Créer un utilisateur administrateur',
)]
class CreateAdminCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher,
        private UserRepository $userRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('email', InputArgument::REQUIRED, 'Email de l\'administrateur')
            ->addArgument('name', InputArgument::REQUIRED, 'Nom de l\'administrateur')
            ->addArgument('password', InputArgument::OPTIONAL, 'Mot de passe (optionnel)')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $email = $input->getArgument('email');
        $name = $input->getArgument('name');
        $password = $input->getArgument('password');

        // Check if user already exists
        $existingUser = $this->userRepository->findOneBy(['email' => $email]);
        if ($existingUser) {
            // Update existing user to admin
            $existingUser->setAsAdmin();
            $this->entityManager->flush();
            
            $io->success(sprintf('Utilisateur %s promu administrateur.', $email));
            return Command::SUCCESS;
        }

        // Generate password if not provided
        if (!$password) {
            $password = bin2hex(random_bytes(8)); // Generate random password
            $io->note(sprintf('Mot de passe généré: %s', $password));
        }

        // Create new admin user
        $user = new User();
        $user->setEmail($email);
        $user->setName($name);
        $user->setAsAdmin();
        
        // Hash password
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $io->success(sprintf('Administrateur créé: %s', $email));
        
        if (!$input->getArgument('password')) {
            $io->note(sprintf('Mot de passe: %s', $password));
        }

        return Command::SUCCESS;
    }
}