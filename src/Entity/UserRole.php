<?php

namespace App\Entity;

class UserRole
{
    // Rôles Symfony de base
    public const ROLE_USER = 'ROLE_USER';
    public const ROLE_ADMIN = 'ROLE_ADMIN';
    
    // Rôles spécifiques à l'application
    public const ROLE_ASSOCIATION_MANAGER = 'ROLE_ASSOCIATION_MANAGER';
    public const ROLE_ASSOCIATION_MEMBER = 'ROLE_ASSOCIATION_MEMBER';
    public const ROLE_VISITOR = 'ROLE_VISITOR';

    public const ROLES = [
        self::ROLE_ADMIN => 'Administrateur',
        self::ROLE_ASSOCIATION_MANAGER => 'Gérant d\'association', 
        self::ROLE_ASSOCIATION_MEMBER => 'Membre d\'association',
        self::ROLE_VISITOR => 'Visiteur',
        self::ROLE_USER => 'Utilisateur'
    ];

    public const ROLE_HIERARCHY = [
        self::ROLE_ADMIN => [
            self::ROLE_ASSOCIATION_MANAGER,
            self::ROLE_ASSOCIATION_MEMBER,
            self::ROLE_VISITOR,
            self::ROLE_USER
        ],
        self::ROLE_ASSOCIATION_MANAGER => [
            self::ROLE_ASSOCIATION_MEMBER,
            self::ROLE_USER
        ],
        self::ROLE_ASSOCIATION_MEMBER => [
            self::ROLE_USER
        ],
        self::ROLE_VISITOR => [
            self::ROLE_USER
        ]
    ];

    public static function getRoleLabel(string $role): string
    {
        return self::ROLES[$role] ?? $role;
    }

    public static function getAllRoles(): array
    {
        return array_keys(self::ROLES);
    }
}