<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251119080416 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE association_member (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, association_id INT NOT NULL, approved_by_id INT DEFAULT NULL, status VARCHAR(20) NOT NULL, role VARCHAR(20) NOT NULL, created_at DATETIME NOT NULL, approved_at DATETIME DEFAULT NULL, INDEX IDX_4390CF0FA76ED395 (user_id), INDEX IDX_4390CF0FEFB9C8A5 (association_id), INDEX IDX_4390CF0F2D234F6A (approved_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE association_member ADD CONSTRAINT FK_4390CF0FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE association_member ADD CONSTRAINT FK_4390CF0FEFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE association_member ADD CONSTRAINT FK_4390CF0F2D234F6A FOREIGN KEY (approved_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE association ADD contact_email VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE tags CHANGE description description VARCHAR(500) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE association_member DROP FOREIGN KEY FK_4390CF0FA76ED395');
        $this->addSql('ALTER TABLE association_member DROP FOREIGN KEY FK_4390CF0FEFB9C8A5');
        $this->addSql('ALTER TABLE association_member DROP FOREIGN KEY FK_4390CF0F2D234F6A');
        $this->addSql('DROP TABLE association_member');
        $this->addSql('ALTER TABLE association DROP contact_email');
        $this->addSql('ALTER TABLE tags CHANGE description description LONGTEXT DEFAULT NULL');
    }
}
