# 📋 PRÉSENTATION ORALE - SYSTÈME D'AJOUT AUX FAVORIS

## 🎯 STRUCTURE (15 minutes)

1. **Introduction** (1 min)
2. **Vue d'ensemble** (1 min)
3. **Démonstration visuelle** (2 min)
4. **Code Frontend** (4 min)
5. **Code Backend** (4 min)
6. **Sécurité & Optimisations** (2 min)
7. **Conclusion & Questions** (1 min)

---

## 1️⃣ INTRODUCTION (1 min)

### Le pitch
```
"J'ai implémenté un système permettant aux utilisateurs d'ajouter leurs
animaux préférés à une liste de favoris, SANS rechargement de page.
C'est un bon exemple d'une application full-stack moderne avec:
- Frontend JavaScript (AJAX)
- Backend API REST (Symfony)
- Base de données (Doctrine ORM)
- Sécurité (authentification + validation)
"
```

### Pourquoi c'est intéressant pour un examen?
✅ Communication Frontend ↔ Backend asynchrone
✅ Bonnes pratiques REST (POST pour créer, DELETE pour supprimer)
✅ Sécurité (utilisateur authentifié, validation)
✅ UX moderne (pas de refresh, feedback immédiat)

---

## 2️⃣ VUE D'ENSEMBLE (1 min)

### Schéma conceptuel
```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATEUR UTILISATEUR                │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Page avec animaux                              │   │
│  │  [♡ Button]  →  Click  →  JS Event Handler     │   │
│  │                ↓                                 │   │
│  │           DOM Update ♡→♥                        │   │
│  │           Notification Toast                    │   │
│  │                ↓                                 │   │
│  │           Fetch POST /api/favorites             │   │
│  └─────────────────────────────────────────────────┘   │
│                         ↕ HTTP                          │
├─────────────────────────────────────────────────────────┤
│              SERVEUR SYMFONY (Backend)                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │  POST /api/favorites                            │   │
│  │  ↓                                               │   │
│  │  1. Vérif: User authentifié? ✓                 │   │
│  │  2. Vérif: Animal existe? ✓                    │   │
│  │  3. Vérif: Pas déjà favori? ✓                  │   │
│  │  ↓                                               │   │
│  │  4. CREATE Favorites entity                     │   │
│  │  5. INSERT en base de données                   │   │
│  │  ↓                                               │   │
│  │  Response: {success: true}                      │   │
│  └─────────────────────────────────────────────────┘   │
│                         ↓                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  BASE DE DONNÉES MySQL                          │   │
│  │  Table: favorites (user_id, animals_id)        │   │
│  │  ↓                                               │   │
│  │  INSERT INTO favorites VALUES (42, 101)        │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 3️⃣ DÉMONSTRATION VISUELLE (2 min)

### État 1: Avant (unfavorited)
```
┌──────────────────┐
│   Animal Card    │
│  [cute dog pic]  │
│                  │
│  Medor 🐕        │
│  ♡ (grey)        │  ← Cœur vide
│  [Share] [Info]  │
└──────────────────┘
```

### État 2: Après (favorited)
```
┌──────────────────┐
│   Animal Card    │
│  [cute dog pic]  │
│                  │
│  Medor 🐕        │
│  ♥ (rouge)       │  ← Cœur rempli + animation scale
│  [Share] [Info]  │
└──────────────────┘

+ Toast notification (top-right): "Ajouté aux favoris ✓" (vert)
```

**À montrer sur l'app:**
- Cliquer sur ♡ → immédiatement devient ♥
- Toast notification apparaît
- Recharger page → ♥ reste (persisté en DB)
- Cliquer ♥ → redevient ♡ (suppression)

---

## 4️⃣ CODE FRONTEND (4 min)

### Fichier: `assets/js/modules/favorites.js`

#### Partie 1: Initialisation
```javascript
// 👇 CODE À MONTRER #1
export function initializeFavoriteButtons() {
    // 1️⃣ Sélectionner TOUS les boutons favoris
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    // 2️⃣ Attacher un listener à chacun
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 3️⃣ Empêcher comportement par défaut
            e.preventDefault();           // Pas de refresh
            e.stopPropagation();          // Pas de bubbling

            // 4️⃣ Récupérer ID de l'animal depuis data attribute
            const animalId = this.dataset.animalId;
            const heartIcon = this.querySelector('i');

            // 5️⃣ Basculer l'état
            if (this.classList.contains('favorited')) {
                // Déjà favori → retirer
                removeFavoriteAction(this, heartIcon, animalId);
            } else {
                // Pas favori → ajouter
                addFavoriteAction(this, heartIcon, animalId);
            }
        });
    });
}

function addFavoriteAction(button, icon, animalId) {
    // DOM update immédiat (UX responsive)
    button.classList.add('favorited');        // Ajouter classe CSS
    icon.classList.remove('far');              // ♡ Regular
    icon.classList.add('fas');                 // ♥ Solid

    // Animation
    button.style.transform = 'scale(1.2)';
    setTimeout(() => button.style.transform = '', 200);

    // Appel serveur
    addFavorite(animalId);
}
```

**Points clés à expliquer:**
- `querySelectorAll()` = sélection multiple
- `addEventListener()` = délégation d'événements
- `dataset.animalId` = récupère valeur HTML `data-animal-id="42"`
- `classList.add/remove` = manipulation DOM légère
- Mise à jour DOM AVANT appel serveur = UX responsive

---

#### Partie 2: Requête AJAX
```javascript
// 👇 CODE À MONTRER #2
function addFavorite(animalId) {
    // 1️⃣ FETCH API (alternative moderne à jQuery.ajax)
    fetch('/api/favorites', {
        method: 'POST',                    // Create = POST (REST convention)
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'  // Signal: c'est AJAX
        },
        body: JSON.stringify({ animalId: animalId })  // Payload JSON
    })

    // 2️⃣ Parser la réponse
    .then(response => response.json())

    // 3️⃣ Traiter la réponse
    .then(data => {
        if (data.success) {
            // ✓ Succès: notification verte
            showNotification('Ajouté aux favoris !', 'success');
        } else {
            // ✗ Erreur: notification rouge
            showNotification(data.message || 'Erreur', 'error');
        }
    })

    // 4️⃣ Traiter erreur réseau
    .catch(error => {
        console.error('Network error:', error);
        showNotification('Erreur réseau', 'error');
    });
}

function removeFavorite(animalId) {
    // Pattern similaire mais avec DELETE (REST convention)
    fetch(`/api/favorites/${animalId}`, {
        method: 'DELETE',                  // Delete = DELETE
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Retiré des favoris', 'info');
        } else {
            showNotification(data.message, 'error');
        }
    })
    .catch(error => showNotification('Erreur réseau', 'error'));
}
```

**Points clés à expliquer:**
- `fetch()` = API moderne, remplace XMLHttpRequest et jQuery.ajax
- `method: 'POST'` vs `'DELETE'` = REST conventions (POST=create, DELETE=remove)
- Header `X-Requested-With` = indique à Symfony que c'est une requête AJAX
- `then()` chains = gestion asynchrone
- `response.json()` = parse la réponse JSON

---

#### Partie 3: Notification Toast
```javascript
// 👇 CODE À MONTRER #3 (Bonus)
function showNotification(message, type = 'info') {
    // 1️⃣ Créer élément div
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // 2️⃣ Styles dynamiques
    const colors = {
        success: '#10B981',  // Vert
        error: '#EF4444',    // Rouge
        info: '#3B82F6'      // Bleu
    };

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        animation: slideInRight 0.3s ease;
        z-index: 1000;
    `;

    // 3️⃣ Injecter en DOM
    document.body.appendChild(notification);

    // 4️⃣ Auto-dismiss après 4 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}
```

**Points clés à expliquer:**
- `createElement()` = création dynamique
- `cssText` = styles inline déclaratifs
- `appendChild()` = injection en DOM
- `setTimeout()` = auto-removal après 4s
- Animations CSS natives (GPU accelerated)

---

### Récapitulatif Frontend
```
User Click
    ↓
Event Handler
    ├─ preventDefault() (pas de refresh)
    ├─ stopPropagation() (pas de bubbling)
    ├─ Extract: animalId from data attribute
    ├─ Toggle: .favorited class
    ├─ Swap: Font Awesome icons (far ↔ fas)
    └─ Animation: scale(1.2)
    ↓
Fetch POST/DELETE to Backend
    ├─ Send JSON payload
    ├─ Include headers (Content-Type, X-Requested-With)
    └─ Chain .then() for responses
    ↓
Handle Response
    ├─ Check data.success
    └─ Show toast notification
```

---

## 5️⃣ CODE BACKEND (4 min)

### Fichier: `src/Controller/AnimalsController.php`

#### Endpoint POST: Ajouter aux favoris
```php
// 👇 CODE À MONTRER #4
#[Route('/api/favorites', name: 'favorites_add', methods: ['POST'])]
#[IsGranted('ROLE_USER')]  // ← Sécurité: user connecté seulement
public function addFavorite(
    Request $request,
    EntityManagerInterface $entityManager,
    AnimalsRepository $animalsRepository
): JsonResponse {

    // 1️⃣ EXTRACT DATA
    $data = json_decode($request->getContent(), true);
    $animalId = $data['animalId'] ?? null;

    // 2️⃣ VALIDATE: ID fourni?
    if (!$animalId) {
        return new JsonResponse(
            ['success' => false, 'message' => 'ID manquant'],
            400  // Bad Request
        );
    }

    // 3️⃣ DATABASE QUERY: Animal existe?
    $animal = $animalsRepository->find($animalId);
    if (!$animal) {
        return new JsonResponse(
            ['success' => false, 'message' => 'Animal non trouvé'],
            404  // Not Found
        );
    }

    // 4️⃣ SECURITY: Get authenticated user
    $user = $this->getUser();

    // 5️⃣ PREVENT DUPLICATE: Déjà en favoris?
    $existingFavorite = $entityManager->getRepository(Favorites::class)
        ->findOneBy([
            'user' => $user,
            'animals' => $animal
        ]);

    if ($existingFavorite) {
        return new JsonResponse(
            ['success' => false, 'message' => 'Déjà en favoris'],
            400
        );
    }

    // 6️⃣ CREATE ENTITY
    $favorite = new Favorites();
    $favorite->setUser($user);
    $favorite->setAnimals($animal);

    // 7️⃣ PERSIST TO DATABASE
    $entityManager->persist($favorite);
    $entityManager->flush();  // ← INSERT en base

    // 8️⃣ RESPOND SUCCESS
    return new JsonResponse(
        ['success' => true, 'message' => 'Ajouté aux favoris']
    );
}
```

**Points clés à expliquer:**

| Ligne | Concept | Explication |
|-------|---------|-------------|
| `#[Route(...)]` | Routing Symfony | Mappe la requête POST `/api/favorites` à cette méthode |
| `#[IsGranted('ROLE_USER')]` | Sécurité | Lance exception 403 si user pas connecté |
| `json_decode()` | Parse JSON | Récupère data de request body |
| `$animalsRepository->find()` | Query Builder | SELECT animal FROM table WHERE id = ? |
| `$this->getUser()` | Security Context | Récupère user actuellement authentifié |
| `findOneBy()` | Query Doctrine | Requête préventive: vérifier pas déjà favori |
| `$entityManager->persist()` | ORM Track | Marquer entity pour insertion |
| `$entityManager->flush()` | ORM Commit | Exécuter INSERT/UPDATE/DELETE en DB |
| `JsonResponse` | API Response | Retourner JSON parsable par Frontend |

---

#### Endpoint DELETE: Retirer des favoris
```php
// 👇 CODE À MONTRER #5 (Bonus)
#[Route('/api/favorites/{animalId}', name: 'favorites_remove', methods: ['DELETE'])]
#[IsGranted('ROLE_USER')]
public function removeFavorite(
    int $animalId,
    EntityManagerInterface $entityManager,
    AnimalsRepository $animalsRepository
): JsonResponse {

    // 1️⃣ Vérif: Animal existe?
    $animal = $animalsRepository->find($animalId);
    if (!$animal) {
        return new JsonResponse(['success' => false, 'message' => 'Animal non trouvé'], 404);
    }

    // 2️⃣ Get user
    $user = $this->getUser();

    // 3️⃣ Find favorite record
    $favorite = $entityManager->getRepository(Favorites::class)
        ->findOneBy(['user' => $user, 'animals' => $animal]);

    // 4️⃣ Vérif: Est-il en favori?
    if (!$favorite) {
        return new JsonResponse(['success' => false, 'message' => 'Pas en favoris'], 400);
    }

    // 5️⃣ DELETE
    $entityManager->remove($favorite);
    $entityManager->flush();  // ← DELETE en base

    // 6️⃣ Response
    return new JsonResponse(['success' => true, 'message' => 'Retiré des favoris']);
}
```

**Point clé:** Pattern identique mais avec `DELETE` et `remove()` au lieu de `persist()`

---

### Fichier Template: `templates/animals/index.html.twig`

```twig
{# 👇 CODE À MONTRER #6 #}
<button class="action-btn favorite-btn"
        data-animal-id="{{ animal.id }}"
        title="Ajouter aux favoris">
    <i class="far fa-heart"></i>
</button>
```

**Points clés:**
- `data-animal-id` = HTML5 custom data attribute
- Accessible en JS via `this.dataset.animalId`
- `class="favorite-btn"` = sélecteur CSS pour querySelector
- `<i>` = Font Awesome icon

---

### Récapitulatif Backend
```
POST /api/favorites
    ↓
1. [SECURITY] #[IsGranted('ROLE_USER')]
   → Lancepem exception 403 si pas connecté
    ↓
2. [PARSE] json_decode($request->getContent())
   → Récupère animalId du payload JSON
    ↓
3. [VALIDATE] Check animalId fourni? ✓
   → Return 400 si missing
    ↓
4. [DATABASE] $animalsRepository->find($animalId)
   → Vérif animal existe
   → Return 404 si not found
    ↓
5. [SECURITY] $this->getUser()
   → Impossible de favoriser pour quelqu'un d'autre
    ↓
6. [IDEMPOTENT] findOneBy(['user' => $user, 'animals' => $animal])
   → Vérif pas déjà favori (prevent duplicate)
   → Return 400 si exists
    ↓
7. [CREATE] new Favorites() + setUser() + setAnimals()
   → Créer entity
    ↓
8. [PERSIST] $entityManager->persist() + flush()
   → INSERT en base de données
    ↓
9. [RESPOND] JsonResponse(['success' => true])
   → Retourner JSON
```

---

## 6️⃣ SÉCURITÉ & OPTIMISATIONS (2 min)

### Sécurité

#### 1. Authentication
```
[FRONTEND]
Clic sur bouton sans être connecté
    ↓
Fetch POST /api/favorites
    ↓
[BACKEND]
#[IsGranted('ROLE_USER')]
    → Lance AccessDeniedException
    → Response: 403 Forbidden
    ↓
[FRONTEND]
Catch error, affiche "Vous devez être connecté"
```

#### 2. Ownership
```php
// Impossible de favoriser pour quelqu'un d'autre
$user = $this->getUser();  // ← Toujours authenticated user
$favorite->setUser($user);  // ← Toujours user connecté
```

#### 3. Idempotency (Prevent Duplicates)
```php
$existingFavorite = $entityManager->getRepository(Favorites::class)
    ->findOneBy(['user' => $user, 'animals' => $animal]);

if ($existingFavorite) {
    return 400;  // Safe: pas d'insertion dupliquée
}
```

#### 4. CSRF Protection
```javascript
// Frontend header
headers: {
    'X-Requested-With': 'XMLHttpRequest'  // ← AJAX signal
}
```
→ Symfony reconnaît comme AJAX request
→ Bypass CSRF token validation (convention)

---

### Optimisations

#### Frontend
```javascript
// Mise à jour DOM AVANT appel serveur
button.classList.add('favorited');  // ← Immédiat (UX responsive)
// ... puis fetch POST
```
→ Utilisateur voit immédiatement le changement
→ Pas d'attente de serveur

#### Backend
```php
// Éviter N+1 queries
$existingFavorite = $entityManager->getRepository(Favorites::class)
    ->findOneBy([...]);  // ← 1 query pour vérifier doublon
// vs boucle qui ferait N queries
```

#### Database
```sql
-- Index sur (user_id, animals_id)
ALTER TABLE favorites ADD UNIQUE KEY unique_user_animal (user_id, animals_id);
-- Accélère findOneBy() + prévient doublon au niveau DB
```

---

## 7️⃣ QUESTIONS POSSIBLES À L'EXAMEN

### Question 1: "Pourquoi `preventDefault()` et `stopPropagation()`?"

**Réponse:**
```
preventDefault() = Empêche comportement par défaut du bouton (pas de refresh/soumit)
stopPropagation() = Empêche event de remonter à éléments parents
                    Important quand bouton est dans une <a> ou <form>
```

---

### Question 2: "Comment gérez-vous les erreurs?"

**Réponse:**
```
Frontend:
- Try/catch sur fetch
- Afficher toast error si response pas success
- Log erreur en console

Backend:
- Return JsonResponse avec success: false + message
- HTTP status codes (400, 404, 403)
- Exceptions catégorisées

Exemple:
if (!$animal) {
    return 404 Not Found
}
if ($existingFavorite) {
    return 400 Bad Request
}
```

---

### Question 3: "Pourquoi utiliser AJAX plutôt qu'un form submit normal?"

**Réponse:**
```
AJAX:
✅ Pas de refresh page
✅ UX fluide (utilisateur continue navigation)
✅ Feedback immédiat avec toast notification
✅ Multiple requests possibles (ajouter/retirer rapidement)

Form submit:
❌ Rechargement page complet
❌ Perte contexte utilisateur
❌ Lent et mauvaise UX
```

---

### Question 4: "Comment assurez-vous qu'un user peut pas favoriser pour quelqu'un d'autre?"

**Réponse:**
```
Backend:
1. #[IsGranted('ROLE_USER')] ← Vérif authentification
2. $user = $this->getUser() ← Récupère USER CONNECTÉ
3. $favorite->setUser($user) ← Toujours le user connecté
                               (pas de paramètre ID fourni par frontend)

Impossible de faire:
POST /api/favorites?userId=999  ← userId ignoré
- Backend récupère toujours $this->getUser()
- Propriétaire = toujours user connecté
```

---

### Question 5: "Qu'est-ce qu'une relation ManyToMany?"

**Réponse:**
```
User ←─ Favorites ─→ Animals
(1)     (Many)      (Many)

Un User peut avoir PLUSIEURS favoris
Un Animal peut être favori de PLUSIEURS users

Table Favorites = "join table" qui lie les deux

Example:
User #1 (Alice) → favorise Animal #10, #20, #30
User #2 (Bob)   → favorise Animal #10, #40

Rows en base:
| user_id | animals_id |
|---------|-----------|
| 1       | 10        |
| 1       | 20        |
| 1       | 30        |
| 2       | 10        |
| 2       | 40        |
```

---

## 8️⃣ FICHIERS À MONTRER

```
Frontend:
├─ assets/js/modules/favorites.js (initializeFavoriteButtons, addFavorite, removeFavorite)
├─ assets/js/modules/notifications.js (showNotification)
├─ assets/styles/pages/_animals.scss (bouton styling)
└─ templates/animals/index.html.twig (HTML button)

Backend:
├─ src/Controller/AnimalsController.php (endpoints POST/DELETE)
├─ src/Entity/Favorites.php (entité)
├─ src/Entity/User.php (relation OneToMany)
└─ src/Entity/Animals.php (relation OneToMany)

Database:
└─ favorites table (user_id, animals_id)
```

---

## 9️⃣ DÉMONSTRATION LIVE (Optionnel)

**Sur l'app en local:**

1. Ouvrir page /animals
2. Ouvrir DevTools (F12) → Network tab
3. Cliquer sur ♡ → Montrer:
   - Request POST /api/favorites
   - Payload: {"animalId": 42}
   - Response: {"success": true}
4. Montrer DOM update: classe .favorited ajoutée
5. Cliquer ♥ → Montrer DELETE request
6. Recharger page → Montrer ♥ reste (persisté en DB)

---

## 🔟 CONCLUSION (1 min)

### Résumé
```
"Ce système de favoris montre une implémentation moderne et sécurisée
d'une fonctionnalité full-stack:

✅ Frontend: Fetch API, DOM manipulation, feedback utilisateur
✅ Backend: API REST, validation, sécurité
✅ Database: Doctrine relationships, persistence
✅ UX: AJAX sans refresh, notifications toast

C'est un pattern réutilisable pour d'autres features AJAX:
- System de likes
- Add to cart
- Follow user
- etc.
"
```

### Points forts à souligner
1. **Asynchrone:** AJAX pour UX fluide
2. **Sécurisé:** Authorization + validation frontend et backend
3. **Robuste:** Gestion d'erreurs multi-niveaux
4. **Performant:** DOM update immédiat (optimistic), UX responsive

---

## ❓ OUVERTURE AUX QUESTIONS

### Si examinateur demande plus loin:

**"Comment gérer cas edge: user clique 10 fois rapidement?"**
→ `isNavigating` flag ou debounce() sur frontend
→ Idempotency au backend (check existe déjà)

**"Comment tester ce système?"**
→ Unit tests PHP: Mock Repository
→ Integration tests: Fake HTTP client
→ E2E tests: Selenium/Playwright pour click réel

**"Performance avec 1 million d'utilisateurs?"**
→ Cache user favorites (Redis)
→ Index database sur (user_id, animals_id)
→ Pagination si trop de favoris

---

## 📝 NOTES POUR PRÉSENTATION

**À faire:**
- ✅ Parler avec confiance et fluidité
- ✅ Montrer code sur IDE/GitHub
- ✅ Faire démo live si possible
- ✅ Expliquer en termes simples (pas jargon)
- ✅ Anticiper questions (vérif 9️⃣)
- ✅ Montrer passion pour la tech

**À éviter:**
- ❌ Lire le code ligne par ligne
- ❌ Entrer dans trop de détails mineurs
- ❌ Montrer code sans expliquer
- ❌ Répondre "je sais pas" (dire "bonne question, faudrait investiguer")
