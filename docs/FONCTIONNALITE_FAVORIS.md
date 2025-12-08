# Fonctionnalité : Système de Favoris

## Vue d'ensemble

Le système de favoris permet aux utilisateurs connectés de sauvegarder les animaux qui les intéressent pour y accéder rapidement depuis leur profil.

---

## Architecture de la fonctionnalité

### 1. Base de données

**Entité : Favorites**

```php
class Favorites
{
    private ?int $id;
    private ?User $user;      // ManyToOne → User
    private ?Animals $animals; // ManyToOne → Animals
}
```

**Type de relation :** ManyToMany avec table de liaison
- Un utilisateur peut avoir **plusieurs** animaux en favoris
- Un animal peut être dans les favoris de **plusieurs** utilisateurs

**Avantages de cette structure :**
- Pas de redondance de données
- Suppression facile des favoris (suppression de la ligne de liaison)
- Requêtes SQL optimisées

---

### 2. Backend - API REST

**Contrôleur : `AnimalsController`**

#### Route 1 : Ajouter aux favoris
```php
#[Route('/api/favorites', name: 'api_favorites_add', methods: ['POST'])]
public function addFavorite(Request $request): JsonResponse
```

**Fonctionnement :**
1. Récupère l'ID de l'animal depuis le JSON de la requête
2. Vérifie que l'utilisateur est connecté
3. Vérifie que l'animal n'est pas déjà en favori
4. Crée une nouvelle entité `Favorites`
5. Persiste en base de données
6. Retourne `{success: true}`

**Gestion des erreurs :**
- Animal déjà en favori → Message d'erreur
- Utilisateur non connecté → Erreur 401
- Animal inexistant → Erreur 404

---

#### Route 2 : Retirer des favoris
```php
#[Route('/api/favorites/{id}', name: 'api_favorites_remove', methods: ['DELETE'])]
public function removeFavorite(int $id): JsonResponse
```

**Fonctionnement :**
1. Recherche le favori par ID d'animal ET utilisateur connecté
2. Supprime l'entrée de la base de données
3. Retourne `{success: true}`

**Sécurité :**
- Impossible de supprimer les favoris d'un autre utilisateur
- Vérification de l'ownership avant suppression

---

### 3. Frontend - JavaScript

**Module : `assets/js/modules/favorites.js`**

#### Architecture modulaire

```javascript
// Export de fonctions réutilisables
export function addFavorite(animalId) { ... }
export function removeFavorite(animalId) { ... }
export function initializeFavoriteButtons() { ... }
```

**Avantages :**
- Code réutilisable sur toutes les pages
- Séparation des responsabilités
- Facilite la maintenance

---

#### Pattern Event Delegation

```javascript
document.addEventListener('click', function(e) {
    const button = e.target.closest('.favorite-btn');
    if (!button) return;
    // Traitement...
});
```

**Pourquoi Event Delegation ?**
- Fonctionne avec les éléments dynamiques (carousel)
- Un seul listener pour tous les boutons
- Meilleures performances
- Évite les doublons d'événements

---

#### Système de Debounce

```javascript
const lastClickTimes = new Map();

// Ignore les clics < 500ms
if (now - lastClick < 500) {
    return;
}
```

**Problème résolu :**
Évite les **doubles clics accidentels** qui créeraient des requêtes API multiples

---

#### État du bouton pendant l'API call

```javascript
button.disabled = true;
button.dataset.processing = 'true';

// Appel API...

.finally(() => {
    button.disabled = false;
    button.dataset.processing = 'false';
});
```

**Avantages :**
- Empêche les clics multiples pendant le traitement
- Feedback visuel pour l'utilisateur
- Évite les états incohérents

---

#### Mise à jour visuelle

```javascript
// Ajout aux favoris
button.classList.add('favorited');
heartIcon.classList.remove('far');  // Coeur vide
heartIcon.classList.add('fas');     // Coeur plein

// Retrait des favoris
button.classList.remove('favorited');
heartIcon.classList.remove('fas');
heartIcon.classList.add('far');
```

**Font Awesome :**
- `far fa-heart` : Coeur vide (non favori)
- `fas fa-heart` : Coeur plein (en favori)

---

### 4. Intégration dans les vues

**Template : `templates/animals/show.html.twig`**

```twig
<button class="favorite-btn {% if isFavorited %}favorited{% endif %}"
        data-animal-id="{{ animal.id }}"
        title="{% if isFavorited %}Retirer des favoris{% else %}Ajouter aux favoris{% endif %}">
    <i class="{% if isFavorited %}fas{% else %}far{% endif %} fa-heart"></i>
</button>
```

**Variables Twig :**
- `isFavorited` : Booléen calculé côté serveur
- Initialisation de l'état visuel avant JavaScript

---

### 5. Affichage des favoris

**Page profil : `templates/profile/index.html.twig`**

```twig
{% for favorite in app.user.favorites %}
    {{ favorite.animals.name }}
    {{ favorite.animals.imageName }}
    <!-- Bouton pour retirer des favoris -->
{% endfor %}
```

**Accès via Doctrine :**
```php
$user->getFavorites() // Collection de Favorites
    ->getAnimals()     // Récupère l'animal associé
```

---

## Flux utilisateur complet

### Scénario : Ajouter un animal en favori

1. **Page animaux** : Utilisateur clique sur le coeur
2. **JavaScript** : Détecte le clic via event delegation
3. **Debounce** : Vérifie qu'aucun clic récent sur ce bouton
4. **État** : Désactive le bouton (`disabled = true`)
5. **API** : `POST /api/favorites` avec `{animalId: 123}`
6. **Backend** :
   - Vérifie l'authentification
   - Crée l'entité Favorites
   - Persiste en BDD
   - Retourne `{success: true}`
7. **JavaScript** :
   - Affiche notification "Ajouté aux favoris !"
   - Change le coeur (vide → plein)
   - Ajoute la classe `.favorited`
   - Réactive le bouton
8. **Animation** : Scale du bouton pour feedback visuel

---

### Scénario : Voir ses favoris

1. **Profil** : Utilisateur va sur "Mon espace"
2. **Backend** :
   - Récupère `$user->getFavorites()`
   - Passe les favoris au template
3. **Template** : Affiche la grille d'animaux favoris
4. **Interaction** : Bouton pour retirer des favoris directement

---

## Gestion des erreurs

### Erreur 1 : Utilisateur non connecté
```javascript
catch(error) {
    showNotification('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
}
```

### Erreur 2 : Animal déjà en favori
```php
if ($existingFavorite) {
    return new JsonResponse(['success' => false, 'message' => 'Déjà dans vos favoris']);
}
```

### Erreur 3 : Animal introuvable
```php
if (!$animal) {
    throw new NotFoundHttpException('Animal non trouvé');
}
```

---

## Optimisations implémentées

### 1. Event Delegation
- Un seul listener au lieu de N listeners
- Supporte les éléments dynamiques (carousel)
- Meilleures performances

### 2. Debounce (500ms)
- Évite les doubles clics accidentels
- Réduit la charge API

### 3. État du bouton
- `disabled` pendant le traitement
- Empêche les clics multiples
- Feedback visuel clair

### 4. Flag d'initialisation
```javascript
let favoritesInitialized = false;
if (favoritesInitialized) return;
```
- Évite les initialisations multiples
- Prévient les doublons de listeners

### 5. Requêtes AJAX optimisées
```javascript
fetch('/api/favorites', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({ animalId: animalId })
})
```

---

## Points forts de l'implémentation

1. **Architecture RESTful** : API claire et standard
2. **Séparation Frontend/Backend** : Logique métier côté serveur
3. **Modularité** : Code JavaScript réutilisable
4. **Sécurité** : Vérifications côté serveur, ownership
5. **UX** : Feedback instantané, animations, notifications
6. **Performance** : Event delegation, debounce
7. **Robustesse** : Gestion complète des erreurs
8. **Maintenabilité** : Code propre, commenté, organisé

---

## Technologies utilisées

- **Backend** : Symfony 7, Doctrine ORM
- **Frontend** : JavaScript ES6, Fetch API
- **Database** : MySQL (table de liaison ManyToMany)
- **UI** : Font Awesome (icônes coeur), notifications personnalisées
- **Pattern** : Event Delegation, Debounce, Module ES6

---

## Améliorations possibles (hors scope actuel)

1. **Notifications push** : Alerte quand un favori est adopté
2. **Notes privées** : Permettre d'ajouter des notes sur chaque favori
3. **Partage de favoris** : Partager sa liste avec d'autres utilisateurs
4. **Limite de favoris** : Limiter le nombre de favoris par utilisateur
5. **Tri des favoris** : Par date d'ajout, espèce, etc.

---

## Conclusion

Le système de favoris est une fonctionnalité complète et robuste qui :
- Améliore l'**engagement utilisateur**
- Facilite le **parcours d'adoption**
- Démontre la maîtrise de **Symfony + JavaScript moderne**
- Suit les **bonnes pratiques** de développement web

C'est une fonctionnalité clé qui montre votre capacité à créer une **application full-stack** avec interactions temps réel et gestion d'état côté client.
