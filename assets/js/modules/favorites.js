/*Ajout dans les favoris*/

import { showNotification } from './notifications.js';

export function addFavorite(animalId) {
    console.log(`Adding animal ${animalId} to favorites`);

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
            showNotification('Ajouté aux favoris !', 'success');
        } else {
            showNotification(data.message || 'Erreur lors de l\'ajout aux favoris', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Vous devez être connecté pour ajouter un animal à vos favoris', 'error');
    });
}

/*Retrait des favoris */
export function removeFavorite(animalId) {
    console.log(`Removing animal ${animalId} from favorites`);

    fetch(`/api/favorites/${animalId}`, {
        method: 'DELETE',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Retiré des favoris', 'info');
        } else {
            showNotification(data.message || 'Erreur lors de la suppression', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Erreur lors de la suppression', 'error');
    });
}

export function initializeFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const animalId = this.dataset.animalId;
            const heartIcon = this.querySelector('i');

            // Toggle favorite state
            if (this.classList.contains('favorited')) {
                this.classList.remove('favorited');
                heartIcon.classList.remove('fas');
                heartIcon.classList.add('far');

                // Remove from favorites
                removeFavorite(animalId);
            } else {
                this.classList.add('favorited');
                heartIcon.classList.remove('far');
                heartIcon.classList.add('fas');

                // Add to favorites
                addFavorite(animalId);
            }

            // Add animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}
