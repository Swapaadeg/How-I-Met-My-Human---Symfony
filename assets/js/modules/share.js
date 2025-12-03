/**
 * Share Module
 * Handles sharing functionality
 */

import { showNotification } from './notifications.js';

export function handleShare(animalId) {
    console.log(`Sharing animal ${animalId}`);

    // Use Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'Adoptez cet adorable animal !',
            text: 'Découvrez cet animal qui cherche une famille',
            url: window.location.origin + `/animals/${animalId}`
        })
        .then(() => {
            showNotification('Partagé avec succès !', 'success');
        })
        .catch((error) => {
            console.log('Error sharing:', error);
            fallbackShare(animalId);
        });
    } else {
        fallbackShare(animalId);
    }
}

export function fallbackShare(animalId) {
    // Copy link to clipboard as fallback
    const url = window.location.origin + `/animals/${animalId}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
            .then(() => {
                showNotification('Lien copié dans le presse-papiers !', 'success');
            })
            .catch(() => {
                showNotification('Impossible de copier le lien', 'error');
            });
    } else {
        // Very old browsers fallback
        showNotification('Copiez ce lien: ' + url, 'info');
    }
}

export function initializeActionButtons() {
    // Share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const animalId = this.dataset.animalId;
            handleShare(animalId);
        });
    });
}
