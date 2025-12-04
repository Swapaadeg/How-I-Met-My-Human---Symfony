/** Le carousel des 10 animaux les plus anciens avec navigation*/

export function initAnimalsCarousel() {
    const carousel = document.querySelector('.animals-carousel');
    const cards = document.querySelectorAll('.carousel-card');
    const indicators = document.querySelectorAll('.indicator-dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (!carousel || cards.length === 0) return;

    let currentIndex = 0;
    let isNavigating = false; // Flag to prevent accidental clicks during navigation

    /**
     * Update carousel display based on current index
     * Applies CSS classes to position cards appropriately
     */
    function updateCarousel() {
        cards.forEach((card, index) => {
            // Reset all position classes
            card.classList.remove('center', 'left', 'right', 'back-left', 'back-right', 'far-back-left', 'far-back-right', 'hidden', 'hidden-right');

            // Calculate relative position
            let relativePos = index - currentIndex;

            // Handle circular wraparound
            if (relativePos > cards.length / 2) {
                relativePos -= cards.length;
            } else if (relativePos < -cards.length / 2) {
                relativePos += cards.length;
            }

            // Assign position classes
            switch (relativePos) {
                case 0:
                    card.classList.add('center');
                    break;
                case -1:
                    card.classList.add('left');
                    break;
                case 1:
                    card.classList.add('right');
                    break;
                case -2:
                    card.classList.add('back-left');
                    break;
                case 2:
                    card.classList.add('back-right');
                    break;
                case -3:
                    card.classList.add('far-back-left');
                    break;
                case 3:
                    card.classList.add('far-back-right');
                    break;
                default:
                    if (relativePos < 0) {
                        card.classList.add('hidden');
                    } else {
                        card.classList.add('hidden-right');
                    }
                    break;
            }
        });

        // Update indicator dots
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    /**
     * Navigate to a specific slide
     * @param {number} index - The index of the slide to navigate to
     */
    function goToSlide(index) {
        if (index >= 0 && index < cards.length && index !== currentIndex) {
            currentIndex = index;
            updateCarousel();

            // Prevent clicks during animation
            isNavigating = true;
            setTimeout(() => {
                isNavigating = false;
            }, 300);
        }
    }

    // Event listeners for indicator dots
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
            goToSlide(prevIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
            goToSlide(nextIndex);
        });
    }

    // Block links on non-center cards
    cards.forEach((card) => {
        const links = card.querySelectorAll('a[href]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Prevent navigation on non-center cards
                if (!card.classList.contains('center')) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            });
        });
    });

    // Card click handling
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Allow view button to work
            const clickedElement = e.target;
            const isViewBtn = clickedElement.closest('.view-btn');
            if (isViewBtn) {
                return;
            }

            // Prevent other interactions
            e.preventDefault();
            e.stopPropagation();

            // Ignore clicks during navigation
            if (isNavigating) {
                return;
            }

            // Navigate to card if not center
            if (!card.classList.contains('center')) {
                goToSlide(index);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
            goToSlide(prevIndex);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
            goToSlide(nextIndex);
        }
    });

    // Touch swipe handling for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    /**
     * Handle swipe gestures
     * Left swipe: next animal
     * Right swipe: previous animal
     */
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to register as swipe
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left = next animal
                const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
                goToSlide(nextIndex);
            } else {
                // Swipe right = previous animal
                const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
                goToSlide(prevIndex);
            }
        }
    }

    // Initialize carousel
    updateCarousel();
}