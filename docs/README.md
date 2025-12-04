# How I Met My Human 🐾

Application Symfony de mise en relation entre animaux abandonnés et futurs adoptants. Plateforme permettant aux associations de publier des fiches d'animaux à l'adoption et aux visiteurs de découvrir leur futur compagnon.

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-compte/How-I-Met-My-Human---Symfony.git
   cd How-I-Met-My-Human---Symfony
   ```

2. Installer les dépendances PHP :
   ```bash
   composer install
   ```

3. Installer les dépendances JavaScript :
   ```bash
   npm install
   ```

4. Copier le fichier d'environnement :
   ```bash
   cp .env .env.local
   ```

5. Configurer la base de données dans `.env.local` :
   ```
   DATABASE_URL="mysql://user:password@127.0.0.1:3306/how_i_met_my_human"
   ```

6. Créer la base de données et lancer les migrations :
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   ```

7. (Optionnel) Charger les données de test :
   ```bash
   php bin/console doctrine:fixtures:load
   ```

8. Compiler les assets :
   ```bash
   npm run build
   ```

## Configuration

- **Symfony** 7.x
- **Base de données** MySQL
- **Upload d'images** VichUploader
- **Assets** Webpack Encore
- **Authentification** Symfony Security

### Variables d'environnement

Configurer dans `.env.local` :
- `DATABASE_URL` : Connexion à la base de données
- `APP_SECRET` : Clé secrète de l'application

## Utilisation

Lancer le serveur Symfony :
```bash
symfony server:start
```

Accéder à l'application sur [http://localhost:8000](http://localhost:8000)

En mode développement, compiler les assets en temps réel :
```bash
npm run watch
```

## Technologies utilisées

### Backend
- **Symfony 7** - Framework PHP
- **Doctrine ORM** - Gestion de base de données
- **VichUploader** - Upload de fichiers
- **EasyAdmin** - Interface d'administration

### Frontend
- **JavaScript ES6** - Modules et AJAX
- **Webpack Encore** - Compilation des assets
- **SCSS** - Styles CSS avancés
- **Font Awesome** - Icônes

### Base de données
- **MySQL** - Base de données relationnelle
- Relations complexes (Users, Animals, Associations, Favorites, Comments)

## Architecture

```
src/
├── Controller/          # Contrôleurs Symfony
├── Entity/             # Entités Doctrine
├── Form/               # Formulaires Symfony
├── Repository/         # Repositories Doctrine
└── Security/           # Configuration sécurité

assets/
├── js/
│   ├── modules/        # Modules JavaScript
│   └── utils/          # Utilitaires
└── styles/
    ├── components/     # Composants SCSS
    └── pages/          # Styles par page

templates/
├── animals/           # Templates animaux
├── associations/      # Templates associations
├── profile/          # Templates profil utilisateur
└── security/         # Templates authentification
```


## API REST

L'application expose une API REST pour les fonctionnalités asynchrones :

- `POST /api/favorites` - Ajouter un animal aux favoris
- `DELETE /api/favorites/{id}` - Retirer un animal des favoris

## Tests

Lancer les tests avec PHPUnit :
```bash
php bin/phpunit
```


## Liens utiles

- [Documentation Symfony](https://symfony.com/doc/current/index.html)
- [Doctrine ORM](https://www.doctrine-project.org/projects/doctrine-orm/en/current/index.html)
- [VichUploaderBundle](https://github.com/dustin10/VichUploaderBundle)
- [Webpack Encore](https://symfony.com/doc/current/frontend.html)


## Auteur

**Marie RIVIER**
