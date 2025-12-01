/**
 * News Carousel Module
 * Infinite scroll carousel for adopter news
 * Creates a seamless infinite loop without visible jumps
 */

/**
 * Initialize news carousels
 * Automatically starts infinite scroll animation for all carousels on the page
 */
export function initializeNewsCarousel() {
    const carousels = document.querySelectorAll('.news-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.news-track');
        if (!track) return;

        const cards = track.querySelectorAll('.news-card');
        if (cards.length === 0) return;

        // Calculate total width of one set of cards
        let trackWidth = 0;
        cards.forEach(card => {
            trackWidth += card.offsetWidth + parseFloat(getComputedStyle(track).gap || 0);
        });

        // Half the track width (since cards are duplicated)
        const halfWidth = trackWidth / 2;

        // Determine direction
        const isRight = carousel.classList.contains('news-carousel-right');
        let position = isRight ? 0 : -halfWidth;

        // Animation speed (pixels per second)
        const speed = halfWidth / 35; // 35 seconds for full cycle

        let animationFrameId;
        let lastTimestamp;
        let isPaused = false;

        /**
         * Animation loop using requestAnimationFrame
         * @param {number} timestamp - High resolution timestamp from RAF
         */
        function animate(timestamp) {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (!isPaused) {
                if (isRight) {
                    // Move left
                    position -= (speed * delta) / 1000;

                    // Reset when halfway through
                    if (position <= -halfWidth) {
                        position = 0;
                    }
                } else {
                    // Move right
                    position += (speed * delta) / 1000;

                    // Reset when at start
                    if (position >= 0) {
                        position = -halfWidth;
                    }
                }

                track.style.transform = `translate3d(${position}px, 0, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        // Start animation
        animationFrameId = requestAnimationFrame(animate);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', () => {
            isPaused = false;
            lastTimestamp = null; // Reset timestamp to avoid jump
        });

        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        });
    });
}
