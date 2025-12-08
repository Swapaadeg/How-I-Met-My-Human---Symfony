/*Ajout dans les favoris*/

import { showNotification } from './notifications.js';

// Flag to prevent multiple initializations
let favoritesInitialized = false;

export function addFavorite(animalId) {
    console.log(`[FAVORITE-API] POST /api/favorites with animalId: ${animalId}`);
    return fetch('/api/favorites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({ animalId: animalId })
    })
    .then(response => {
        console.log(`[FAVORITE-API] Response status: ${response.status}`);
        return response.json().then(data => {
            console.log(`[FAVORITE-API] Response data:`, data);
            return { status: response.status, data };
        });
    })
    .then(({ status, data }) => {
        if (data.success) {
            showNotification('Ajouté aux favoris !', 'success');
            return true;
        } else {
            console.warn(`[FAVORITE-API] API returned success=false: ${data.message}`);
            showNotification(data.message || 'Erreur lors de l\'ajout aux favoris', 'error');
            return false;
        }
    })
    .catch(error => {
        console.error(`[FAVORITE-API] Fetch error:`, error);
        showNotification('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
        return false;
    });
}

/*Retrait des favoris */
export function removeFavorite(animalId) {
    return fetch(`/api/favorites/${animalId}`, {
        method: 'DELETE',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Retiré des favoris', 'info');
            return true;
        } else {
            showNotification(data.message || 'Erreur lors de la suppression', 'error');
            return false;
        }
    })
    .catch(error => {
        showNotification('Erreur lors de la suppression', 'error');
        return false;
    });
}

// Map to track last click time per button
const lastClickTimes = new Map();

export function initializeFavoriteButtons() {
    // Prevent multiple initializations
    if (favoritesInitialized) {
        console.log('[FAVORITE] Already initialized, skipping');
        return;
    }
    favoritesInitialized = true;

    // Use event delegation on document to avoid multiple listeners
    document.addEventListener('click', function(e) {
        const button = e.target.closest('.favorite-btn');
        if (!button) return;

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        // Debounce: Ignore clicks within 500ms of the last click on this button
        const now = Date.now();
        const lastClick = lastClickTimes.get(button) || 0;
        if (now - lastClick < 500) {
            console.log(`[FAVORITE] Debounced click - too fast`);
            return;
        }
        lastClickTimes.set(button, now);

        const animalId = button.dataset.animalId;
        const heartIcon = button.querySelector('i');
        const wasFavorited = button.classList.contains('favorited');

        console.log(`[FAVORITE] Click on animal ${animalId}, wasFavorited: ${wasFavorited}`);

        // Disable button during API call
        if (button.disabled || button.dataset.processing === 'true') {
            console.log(`[FAVORITE] Button already processing, ignoring click`);
            return;
        }
        button.disabled = true;
        button.dataset.processing = 'true';

        // Toggle favorite state
        if (wasFavorited) {
            // Remove from favorites
            console.log(`[FAVORITE] Removing animal ${animalId} from favorites`);
            removeFavorite(animalId)
                .then(success => {
                    if (success) {
                        button.classList.remove('favorited');
                        heartIcon.classList.remove('fas');
                        heartIcon.classList.add('far');
                        button.title = 'Ajouter aux favoris';
                    }
                })
                .finally(() => {
                    button.disabled = false;
                    button.dataset.processing = 'false';
                });
        } else {
            // Add to favorites
            console.log(`[FAVORITE] Adding animal ${animalId} to favorites`);
            addFavorite(animalId)
                .then(success => {
                    if (success) {
                        button.classList.add('favorited');
                        heartIcon.classList.remove('far');
                        heartIcon.classList.add('fas');
                        button.title = 'Retirer des favoris';
                    }
                })
                .finally(() => {
                    button.dataset.processing = 'false';
                });
        }

        // Add animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    });
}
