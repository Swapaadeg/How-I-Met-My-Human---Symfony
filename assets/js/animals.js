/**
 * Animals Module
 * Manages animal cards, favorites, sharing, and interactions
 */

/**
 * Initialize all animals page functionality
 */
export function initializeAnimals() {
    // Initialize favorite buttons
    initializeFavoriteButtons();

    // Initialize animal cards interactions
    initializeAnimalCards();

    // Initialize see more buttons
    initializeSeeMoreButtons();

    // Initialize action buttons
    initializeActionButtons();

    // Initialize tooltips
    initializeTooltips();
}

function initializeFavoriteButtons() {
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

function initializeAnimalCards() {
    const animalCards = document.querySelectorAll('.animal-card');

    animalCards.forEach(card => {
        // Don't add click navigation for carousel cards - carousel handles their interaction
        if (card.classList.contains('carousel-card')) {
            return;
        }

        // Add click handler for grid cards (excluding buttons)
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons
            if (e.target.closest('.action-btn') || e.target.closest('.see-more-btn')) {
                return;
            }

            // Get animal ID and redirect to detail page
            const animalId = this.dataset.animalId;
            if (animalId) {
                window.location.href = `/animals/${animalId}`;
            }
        });
        
        // Add hover effects
        const image = card.querySelector('.card-image img');
        if (image) {
            card.addEventListener('mouseenter', function() {
                image.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', function() {
                image.style.transform = 'scale(1)';
            });
        }
    });
}

function initializeSeeMoreButtons() {
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const animalId = this.dataset.animalId;
            
            // Redirect to animal detail page
            window.location.href = `/animals/${animalId}`;
        });
    });
}

function initializeActionButtons() {
    // Contact buttons are now handled by contact-modal.js

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

function addFavorite(animalId) {
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
        showNotification('Erreur lors de l\'ajout aux favoris', 'error');
    });
}

function removeFavorite(animalId) {
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

// handleContact function removed - Contact now uses direct mailto: links

function handleShare(animalId) {
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

function fallbackShare(animalId) {
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

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Define colors based on type
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        info: '#3B82F6',
        warning: '#F59E0B'
    };
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-weight: 500;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Initialize tooltips functionality
function initializeTooltips() {
    const tagsWithTooltips = document.querySelectorAll('.tag[data-tooltip], .tag-mini[data-tooltip]');
    
    tagsWithTooltips.forEach(tag => {
        // Add hover events for better tooltip positioning
        tag.addEventListener('mouseenter', function(e) {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                // Position tooltip to avoid viewport overflow
                const rect = this.getBoundingClientRect();
                const tooltipElement = this;
                
                // Adjust tooltip position if near viewport edges
                setTimeout(() => {
                    const pseudoElement = window.getComputedStyle(tooltipElement, '::before');
                    if (rect.left < 150) {
                        tooltipElement.style.setProperty('--tooltip-align', 'left');
                    } else if (rect.right > window.innerWidth - 150) {
                        tooltipElement.style.setProperty('--tooltip-align', 'right');
                    }
                }, 10);
            }
        });
        
        tag.addEventListener('mouseleave', function() {
            // Reset tooltip position
            this.style.removeProperty('--tooltip-align');
        });
        
        // Add click event for mobile devices
        tag.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const tooltip = this.getAttribute('data-tooltip');
                const tagName = this.getAttribute('data-tag-name');
                
                if (tooltip) {
                    showTagModal(tagName, tooltip);
                }
            }
        });
    });
}

// Show modal for mobile devices
function showTagModal(tagName, description) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.tag-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tag-modal';
    modal.innerHTML = `
        <div class="tag-modal-content">
            <div class="tag-modal-header">
                <h3>${tagName}</h3>
                <button class="tag-modal-close">&times;</button>
            </div>
            <div class="tag-modal-body">
                <p>${description}</p>
            </div>
        </div>
        <div class="tag-modal-backdrop"></div>
    `;
    
    // Add to page
    document.body.appendChild(modal);
    
    // Close modal events
    const closeBtn = modal.querySelector('.tag-modal-close');
    const backdrop = modal.querySelector('.tag-modal-backdrop');
    
    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

/**
 * Export functions for external use
 * showNotification is exported for use by other modules (like contact-modal.js)
 */
export {
    showNotification,
    addFavorite,
    removeFavorite,
    handleShare,
    initializeTooltips
};

// Also make available globally for backward compatibility with contact-modal.js
window.AnimalCards = {
    addFavorite,
    removeFavorite,
    showNotification,
    handleShare,
    initializeTooltips
};