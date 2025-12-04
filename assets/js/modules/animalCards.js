/**
Animal Cards Module
Handles animal card interactions and navigation
 */

export function initializeAnimalCards() {
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

export function initializeSeeMoreButtons() {
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
