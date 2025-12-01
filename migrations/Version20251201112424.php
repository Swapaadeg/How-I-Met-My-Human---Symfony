<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251201112424 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Remove ROLE_VISITOR from all users and replace with empty roles array';
    }

    public function up(Schema $schema): void
    {
        // Remove ROLE_VISITOR from all users
        // Users with only ROLE_VISITOR will get an empty array (ROLE_USER is added automatically by the entity)
        $this->addSql("UPDATE user SET roles = JSON_ARRAY() WHERE roles = JSON_ARRAY('ROLE_VISITOR')");

        // For users with ROLE_VISITOR and other roles, we need to remove ROLE_VISITOR
        // This requires using JSON_REMOVE with the proper path
        $this->addSql("
            UPDATE user
            SET roles = JSON_REMOVE(
                roles,
                REPLACE(
                    JSON_SEARCH(roles, 'one', 'ROLE_VISITOR'),
                    '\"',
                    ''
                )
            )
            WHERE JSON_SEARCH(roles, 'one', 'ROLE_VISITOR') IS NOT NULL
        ");
    }

    public function down(Schema $schema): void
    {
        // No need to restore ROLE_VISITOR as it's being deprecated
    }
}
