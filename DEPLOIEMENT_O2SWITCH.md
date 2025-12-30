# Déploiement sur o2switch

## Étapes à suivre sur votre serveur o2switch

### 1. Uploader les fichiers
Uploadez tous vos fichiers sur o2switch via FTP/SFTP (sauf les dossiers `var/`, `vendor/` et `node_modules/`)

### 2. Configuration de l'environnement
Sur votre serveur o2switch :
```bash
# Renommez le fichier de configuration
mv .env.local.o2switch .env.local

# Éditez .env.local et mettez à jour la DATABASE_URL avec vos identifiants o2switch
# Vous trouverez ces informations dans votre panel o2switch
```

### 3. Installation des dépendances
Connectez-vous en SSH à votre serveur o2switch et exécutez :
```bash
cd /path/to/your/project

# Installer les dépendances de production uniquement
composer install --no-dev --optimize-autoloader

# Vider et réchauffer le cache
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod
```

### 4. Base de données
```bash
# Si vous devez créer la base de données
php bin/console doctrine:database:create --env=prod

# Exécuter les migrations
php bin/console doctrine:migrations:migrate --env=prod --no-interaction
```

### 5. Configurer le document root
Dans le panel o2switch, configurez le document root vers le dossier `public/` de votre projet Symfony.

### 6. Permissions
Assurez-vous que les dossiers `var/` et `public/uploads/` (si vous en avez) sont accessibles en écriture :
```bash
chmod -R 775 var/
chmod -R 775 public/uploads/
```

## Fichiers à mettre à jour

### .env.local (sur le serveur)
N'oubliez pas de mettre à jour :
- `DATABASE_URL` avec vos identifiants de base de données o2switch
- Vérifiez que `APP_ENV=prod` et `APP_DEBUG=0`

## Résolution de l'erreur DebugBundle
L'erreur que vous aviez est due au fait que :
- En production (`APP_ENV=prod`), Symfony ne charge pas les bundles de développement
- Le fichier `.env.local.o2switch` configure correctement `APP_ENV=prod`
- L'installation avec `--no-dev` évite d'installer les dépendances de développement

## Support
Si vous rencontrez des problèmes, vérifiez :
1. Que le fichier `.env.local` est bien présent sur le serveur
2. Que `APP_ENV=prod` dans `.env.local`
3. Que le cache a été vidé
4. Les logs dans `var/log/prod.log`
