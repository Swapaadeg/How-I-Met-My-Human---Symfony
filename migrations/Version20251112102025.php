<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251112102025 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE animals (id INT AUTO_INCREMENT NOT NULL, species_id INT DEFAULT NULL, association_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, age VARCHAR(255) NOT NULL, sexe VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, date_arrivee DATE NOT NULL, INDEX IDX_966C69DDB2A1D860 (species_id), INDEX IDX_966C69DDEFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animals_tags (animals_id INT NOT NULL, tags_id INT NOT NULL, INDEX IDX_6304F884132B9E58 (animals_id), INDEX IDX_6304F8848D7B4FB4 (tags_id), PRIMARY KEY(animals_id, tags_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE association (id INT AUTO_INCREMENT NOT NULL, department_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, code_postal INT NOT NULL, INDEX IDX_FD8521CCAE80F5DF (department_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comments (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, animals_id INT DEFAULT NULL, date_ajout DATE NOT NULL, text VARCHAR(255) NOT NULL, INDEX IDX_5F9E962AA76ED395 (user_id), INDEX IDX_5F9E962A132B9E58 (animals_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE department (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, code INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favorites (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, animals_id INT DEFAULT NULL, INDEX IDX_E46960F5A76ED395 (user_id), INDEX IDX_E46960F5132B9E58 (animals_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE species (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tags (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE animals ADD CONSTRAINT FK_966C69DDB2A1D860 FOREIGN KEY (species_id) REFERENCES species (id)');
        $this->addSql('ALTER TABLE animals ADD CONSTRAINT FK_966C69DDEFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE animals_tags ADD CONSTRAINT FK_6304F884132B9E58 FOREIGN KEY (animals_id) REFERENCES animals (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE animals_tags ADD CONSTRAINT FK_6304F8848D7B4FB4 FOREIGN KEY (tags_id) REFERENCES tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE association ADD CONSTRAINT FK_FD8521CCAE80F5DF FOREIGN KEY (department_id) REFERENCES department (id)');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A132B9E58 FOREIGN KEY (animals_id) REFERENCES animals (id)');
        $this->addSql('ALTER TABLE favorites ADD CONSTRAINT FK_E46960F5A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE favorites ADD CONSTRAINT FK_E46960F5132B9E58 FOREIGN KEY (animals_id) REFERENCES animals (id)');
        $this->addSql('ALTER TABLE user ADD association_id INT DEFAULT NULL, ADD name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649EFB9C8A5 ON user (association_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649EFB9C8A5');
        $this->addSql('ALTER TABLE animals DROP FOREIGN KEY FK_966C69DDB2A1D860');
        $this->addSql('ALTER TABLE animals DROP FOREIGN KEY FK_966C69DDEFB9C8A5');
        $this->addSql('ALTER TABLE animals_tags DROP FOREIGN KEY FK_6304F884132B9E58');
        $this->addSql('ALTER TABLE animals_tags DROP FOREIGN KEY FK_6304F8848D7B4FB4');
        $this->addSql('ALTER TABLE association DROP FOREIGN KEY FK_FD8521CCAE80F5DF');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962AA76ED395');
        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A132B9E58');
        $this->addSql('ALTER TABLE favorites DROP FOREIGN KEY FK_E46960F5A76ED395');
        $this->addSql('ALTER TABLE favorites DROP FOREIGN KEY FK_E46960F5132B9E58');
        $this->addSql('DROP TABLE animals');
        $this->addSql('DROP TABLE animals_tags');
        $this->addSql('DROP TABLE association');
        $this->addSql('DROP TABLE comments');
        $this->addSql('DROP TABLE department');
        $this->addSql('DROP TABLE favorites');
        $this->addSql('DROP TABLE species');
        $this->addSql('DROP TABLE tags');
        $this->addSql('DROP INDEX IDX_8D93D649EFB9C8A5 ON user');
        $this->addSql('ALTER TABLE user DROP association_id, DROP name');
    }
}
