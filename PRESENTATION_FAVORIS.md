# Présentation Orale: Système d'Ajout aux Favoris

## Vue d'ensemble (2 min)
La fonctionnalité "Ajouter aux favoris" permet aux utilisateurs connectés de sauvegarder leurs animaux préférés en cliquant sur un bouton cœur. C'est une fonctionnalité **full-stack** qui montre:
- **Frontend:** JavaScript AJAX avec fetch()
- **Backend:** API REST Symfony avec validation
- **Base de données:** Relation Many-to-Many

---

## 1. Le Bouton (Frontend HTML/Twig)

### Fichier: `templates/animals/index.html.twig` (ligne 179)

```twig
<button class="action-btn favorite-btn {% if animal.id in user_favorite_ids %}favorited{% endif %}"
        data-animal-id="{{ animal.id }}"
        title="{% if animal.id in user_favorite_ids %}Retirer des favoris{% else %}Ajouter aux favoris{% endif %}">
    <i class="{% if animal.id in user_favorite_ids %}fas{% else %}far{% endif %} fa-heart"></i>
</button>
```

### Explication mot par mot:

**`class="action-btn favorite-btn"`**
- `action-btn` = Style général pour tous les boutons d'action
- `favorite-btn` = Style spécifique au bouton favoris

**`{% if animal.id in user_favorite_ids %}favorited{% endif %}`**
- Condition Twig qui vérifie si l'animal est déjà en favoris
- Si oui → ajoute la classe `favorited` (cœur plein, coloré)
- Si non → pas de classe (cœur vide)

**`data-animal-id="{{ animal.id }}"`**
- Attribut HTML personnalisé qui stocke l'ID de l'animal
- JavaScript va lire cet ID pour savoir quel animal ajouter/retirer

**`title="..."`**
- Tooltip qui s'affiche au survol
- Change selon si déjà en favoris ou pas

**`<i class="... fa-heart"></i>`**
- Icône Font Awesome
- `fas` (solid) = cœur plein si déjà favori
- `far` (regular) = cœur vide sinon

### Pourquoi ce code est intelligent:
✅ Le serveur rend l'état initial correct (pas de clignotement au chargement)
✅ JavaScript gère ensuite les changements dynamiques
✅ Bon équilibre entre Twig (état serveur) et JS (interactivité)

---

## 2. Le JavaScript (Frontend)

### Fichier: `assets/js/modules/favorites.js`

### 2.1 Initialisation des boutons

```javascript
export function initializeFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const animalId = this.dataset.animalId;
            const isFavorited = this.classList.contains('favorited');

            if (isFavorited) {
                removeFavorite(animalId, this);
            } else {
                addFavorite(animalId, this);
            }
        });
    });
}
```

**Ce qui se passe:**
1. `querySelectorAll('.favorite-btn')` = Trouve tous les boutons favoris
2. `addEventListener('click')` = Écoute les clics
3. `e.preventDefault()` = Empêche le comportement par défaut
4. `e.stopPropagation()` = Empêche le clic de se propager (évite d'ouvrir la fiche animal)
5. `dataset.animalId` = Récupère l'ID depuis `data-animal-id`
6. `classList.contains('favorited')` = Vérifie si déjà en favoris
7. Appelle `addFavorite()` ou `removeFavorite()` selon l'état

---

### 2.2 Ajouter aux favoris (La partie AJAX!)

```javascript
export function addFavorite(animalId, button) {
    fetch('/api/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({ animalId: animalId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            button.classList.add('favorited');
            const icon = button.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
            showNotification('Ajouté aux favoris !', 'success');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Erreur lors de l\'ajout', 'error');
    });
}
```

### Décortication ligne par ligne:

#### **fetch('/api/favorites', {**
- `fetch()` = Fonction JavaScript pour envoyer une requête au serveur
- `'/api/favorites'` = L'adresse (route Symfony) à contacter

#### **method: 'POST',**
- `POST` = Type de requête pour AJOUTER des données
- (Contrairement à `GET` pour lire, `DELETE` pour supprimer)

#### **headers: { ... }**
Les "headers" sont des informations supplémentaires pour le serveur:

**`'Content-Type': 'application/json'`**
- Dit au serveur: "Je t'envoie du JSON"
- Comme une enveloppe avec "FRAGILE" dessus

**`'X-Requested-With': 'XMLHttpRequest'`**
- Dit au serveur: "C'est une requête AJAX, pas un formulaire normal"
- Symfony utilise ça pour vérifier que c'est bien une requête asynchrone

#### **body: JSON.stringify({ animalId: animalId })**
- `body` = Le contenu qu'on envoie (les données)
- `JSON.stringify()` = Convertit l'objet JavaScript en texte JSON
- `{ animalId: animalId }` = On envoie l'ID de l'animal

**Exemple:** Si `animalId = 42`, ça envoie `{"animalId":42}`

#### **.then(response => response.json())**
- `then()` = "Quand la réponse arrive..."
- `response.json()` = Convertit la réponse JSON en objet JavaScript

#### **.then(data => { ... })**
- Maintenant qu'on a les données converties, on peut les utiliser
- `data.success` = Le serveur a dit si ça a marché ou pas

#### **Si succès: Mise à jour visuelle**
```javascript
button.classList.add('favorited');      // Ajoute la classe CSS
icon.classList.remove('far');           // Enlève "regular"
icon.classList.add('fas');              // Ajoute "solid" (plein)
showNotification('Ajouté !', 'success'); // Toast notification
```

#### **.catch(error => { ... })**
- Si quelque chose plante (pas de connexion, erreur serveur, etc.)
- Affiche un message d'erreur

---

### 2.3 Retirer des favoris

```javascript
export function removeFavorite(animalId, button) {
    fetch(`/api/favorites/${animalId}`, {
        method: 'DELETE',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            button.classList.remove('favorited');
            const icon = button.querySelector('i');
            icon.classList.remove('fas');
            icon.classList.add('far');
            showNotification('Retiré des favoris', 'info');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Erreur', 'error');
    });
}
```

**Différences avec addFavorite:**
- Route: `/api/favorites/${animalId}` (avec l'ID dans l'URL)
- Méthode: `DELETE` au lieu de `POST`
- Pas de body (l'ID est dans l'URL)
- Enlève `favorited` et change `fas` → `far`

---

## 3. Le Backend (API Symfony)

### Fichier: `src/Controller/AnimalsController.php`

### 3.1 Ajouter aux favoris (ligne 356)

```php
#[Route('/api/favorites', methods: ['POST'])]
#[IsGranted('ROLE_USER')]
public function addFavorite(
    Request $request,
    EntityManagerInterface $entityManager,
    AnimalsRepository $animalsRepository
): JsonResponse {
    // 1️⃣ Récupérer l'utilisateur connecté
    $user = $this->getUser();

    // 2️⃣ Récupérer les données JSON envoyées
    $data = json_decode($request->getContent(), true);
    $animalId = $data['animalId'] ?? null;

    // 3️⃣ Vérifier que l'ID est fourni
    if (!$animalId) {
        return new JsonResponse([
            'success' => false,
            'message' => 'Animal ID manquant'
        ], 400);
    }

    // 4️⃣ Trouver l'animal dans la base de données
    $animal = $animalsRepository->find($animalId);

    if (!$animal) {
        return new JsonResponse([
            'success' => false,
            'message' => 'Animal introuvable'
        ], 404);
    }

    // 5️⃣ Vérifier si déjà en favoris (éviter les doublons)
    $existingFavorite = $entityManager->getRepository(Favorites::class)
        ->findOneBy(['user' => $user, 'animals' => $animal]);

    if ($existingFavorite) {
        return new JsonResponse([
            'success' => false,
            'message' => 'Déjà en favoris'
        ], 400);
    }

    // 6️⃣ Créer le favori
    $favorite = new Favorites();
    $favorite->setUser($user);
    $favorite->setAnimals($animal);

    // 7️⃣ Sauvegarder en base de données
    $entityManager->persist($favorite);
    $entityManager->flush();

    // 8️⃣ Répondre avec succès
    return new JsonResponse([
        'success' => true,
        'message' => 'Ajouté aux favoris'
    ]);
}
```

### Explication étape par étape:

#### **#[Route('/api/favorites', methods: ['POST'])]**
- Déclare la route accessible via `POST /api/favorites`
- `methods: ['POST']` = Uniquement les requêtes POST

#### **#[IsGranted('ROLE_USER')]**
- Sécurité Symfony: vérifie que l'utilisateur est connecté
- Sinon → erreur 403 Forbidden

#### **1️⃣ Récupérer l'utilisateur**
```php
$user = $this->getUser();
```
- `getUser()` retourne l'utilisateur connecté (via la session)

#### **2️⃣ Récupérer les données JSON**
```php
$data = json_decode($request->getContent(), true);
$animalId = $data['animalId'] ?? null;
```
- `$request->getContent()` = Lit le body de la requête (le JSON brut)
- `json_decode(..., true)` = Convertit le JSON en tableau PHP
- `?? null` = Si `animalId` n'existe pas, mettre `null`

#### **3️⃣-4️⃣ Validation**
- Vérifie que l'ID est fourni
- Vérifie que l'animal existe en BDD
- Si problème → retourne une erreur JSON avec code HTTP approprié

#### **5️⃣ Vérifier les doublons**
```php
$existingFavorite = $entityManager->getRepository(Favorites::class)
    ->findOneBy(['user' => $user, 'animals' => $animal]);
```
- Cherche s'il existe déjà un favori pour cet utilisateur + animal
- Évite d'ajouter deux fois le même

#### **6️⃣ Créer l'objet Favorites**
```php
$favorite = new Favorites();
$favorite->setUser($user);
$favorite->setAnimals($animal);
```
- Crée une nouvelle instance de `Favorites`
- Associe l'utilisateur et l'animal

#### **7️⃣ Sauvegarder**
```php
$entityManager->persist($favorite);  // Dire "prépare-toi à sauvegarder ça"
$entityManager->flush();             // Exécuter la sauvegarde en BDD
```

#### **8️⃣ Réponse JSON**
```php
return new JsonResponse(['success' => true, 'message' => '...']);
```
- Renvoie du JSON que JavaScript va recevoir dans `.then(data => ...)`

---

### 3.2 Retirer des favoris (ligne 394)

```php
#[Route('/api/favorites/{animalId}', methods: ['DELETE'])]
#[IsGranted('ROLE_USER')]
public function removeFavorite(
    int $animalId,
    EntityManagerInterface $entityManager,
    AnimalsRepository $animalsRepository
): JsonResponse {
    $user = $this->getUser();
    $animal = $animalsRepository->find($animalId);

    if (!$animal) {
        return new JsonResponse([
            'success' => false,
            'message' => 'Animal introuvable'
        ], 404);
    }

    // Trouver le favori à supprimer
    $favorite = $entityManager->getRepository(Favorites::class)
        ->findOneBy(['user' => $user, 'animals' => $animal]);

    if (!$favorite) {
        return new JsonResponse([
            'success' => false,
            'message' => 'Pas en favoris'
        ], 404);
    }

    // Supprimer
    $entityManager->remove($favorite);
    $entityManager->flush();

    return new JsonResponse([
        'success' => true,
        'message' => 'Retiré des favoris'
    ]);
}
```

**Différence principale:**
- `remove()` au lieu de `persist()`
- Cherche le favori existant et le supprime

---

## 4. La Base de Données

### Entité: `src/Entity/Favorites.php`

```php
#[ORM\Entity]
class Favorites
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'favorites')]
    private ?User $user = null;

    #[ORM\ManyToOne(targetEntity: Animals::class, inversedBy: 'favorites')]
    private ?Animals $animals = null;
}
```

### Structure en BDD:

Table `favorites`:
```
id  | user_id | animal_id
----|---------|-----------
1   | 5       | 23
2   | 5       | 42
3   | 7       | 23
```

**Relation Many-to-Many:**
- Un utilisateur peut avoir plusieurs favoris
- Un animal peut être favori de plusieurs utilisateurs
- La table `Favorites` est la **table de liaison**

---

## 5. Le Flux Complet (Diagramme)

```
UTILISATEUR CLIQUE SUR LE CŒUR
           ↓
JavaScript détecte le clic
           ↓
Lit data-animal-id="42"
           ↓
Envoie POST /api/favorites avec {animalId: 42}
           ↓
SERVEUR SYMFONY reçoit la requête
           ↓
Vérifie que l'utilisateur est connecté
           ↓
Vérifie que l'animal existe
           ↓
Vérifie qu'il n'est pas déjà en favoris
           ↓
Crée une ligne dans la table favorites
           ↓
Retourne {success: true}
           ↓
JavaScript reçoit la réponse
           ↓
Ajoute la classe "favorited"
Change far → fas (cœur vide → plein)
Affiche notification "Ajouté aux favoris !"
           ↓
FIN
```

---

## 6. Questions Probables à l'Oral

### Q: Pourquoi utiliser AJAX au lieu d'un formulaire normal?
**R:** Parce qu'avec AJAX:
- ✅ Pas de rechargement de page (meilleure UX)
- ✅ Plus rapide
- ✅ Peut ajouter/retirer plusieurs favoris sans perdre sa position sur la page

### Q: Que fait JSON.stringify()?
**R:** Convertit un objet JavaScript en texte JSON.
- Avant: `{ animalId: 42 }` (objet JavaScript)
- Après: `"{"animalId":42}"` (texte qu'on peut envoyer sur le réseau)

### Q: Pourquoi deux méthodes (POST et DELETE)?
**R:** C'est une bonne pratique REST:
- `POST` = Créer une ressource
- `DELETE` = Supprimer une ressource
- Rend l'API claire et prévisible

### Q: Comment le serveur sait qui est l'utilisateur?
**R:** Via la session Symfony. Quand tu te connectes, Symfony crée une session avec un cookie. À chaque requête, le navigateur envoie ce cookie automatiquement.

### Q: Et si deux personnes ajoutent le même animal en même temps?
**R:** Pas de problème! On vérifie les doublons (ligne 5️⃣ du code backend). Si ça existe déjà, on refuse.

### Q: Que se passe-t-il si l'utilisateur n'est pas connecté?
**R:** `#[IsGranted('ROLE_USER')]` bloque la requête automatiquement. Retourne une erreur 403 Forbidden.

### Q: Pourquoi `e.stopPropagation()` dans le JavaScript?
**R:** Parce que le bouton est à l'intérieur d'une card cliquable. Sans ça, cliquer sur le cœur ouvrirait aussi la fiche de l'animal.

---

## 7. Points Clés à Retenir pour l'Oral

✅ **Frontend:** HTML/Twig rend l'état initial, JavaScript gère l'interactivité

✅ **AJAX:** Pas de rechargement, juste des requêtes JSON en background

✅ **Backend:** Validation stricte, vérification des doublons, sécurité

✅ **Base de données:** Relation Many-to-Many via table de liaison

✅ **UX:** Feedback immédiat (cœur change, notification s'affiche)

---

## 8. Fichiers à Montrer dans l'Ordre

1. **Le bouton** → `templates/animals/index.html.twig:179`
2. **JavaScript init** → `assets/js/modules/favorites.js:1-20`
3. **JavaScript addFavorite** → `assets/js/modules/favorites.js:22-45`
4. **Backend addFavorite** → `src/Controller/AnimalsController.php:356-392`
5. **Entité Favorites** → `src/Entity/Favorites.php:10-20`

---

## 9. Code pour Copier-Coller

Si tu veux mettre dans ton diaporama:

```javascript
// Le fetch() simplifié
fetch('/api/favorites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ animalId: 42 })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        // Mettre à jour l'UI
    }
});
```

```php
// Le backend simplifié
$favorite = new Favorites();
$favorite->setUser($user);
$favorite->setAnimals($animal);

$entityManager->persist($favorite);
$entityManager->flush();

return new JsonResponse(['success' => true]);
```

---

## Durée Estimée de Présentation

- **Introduction** (qu'est-ce que c'est): 1 min
- **Le bouton HTML/Twig**: 2 min
- **Le JavaScript AJAX**: 3 min
- **Le backend Symfony**: 3 min
- **La base de données**: 1 min
- **Questions**: 2-3 min

**Total: 12-14 minutes** ← Parfait pour un oral!

---

Bonne présentation! 🐾❤️
