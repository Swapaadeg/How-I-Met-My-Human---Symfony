// Carrousel functionality
export function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentSlide = 0;
    let autoSlideInterval = null;
    let isManualNavigation = false;

    if (slides.length === 0) return;

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        // Force stop any existing interval
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
        
        autoSlideInterval = setInterval(() => {
            if (!isManualNavigation) {
                nextSlide();
            }
        }, 5000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    // Event listeners for navigation buttons
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            isManualNavigation = true;
            stopAutoSlide();
            nextSlide();
            
            // Reset manual navigation flag and restart timer after a short delay
            setTimeout(() => {
                isManualNavigation = false;
                startAutoSlide();
            }, 100);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            isManualNavigation = true;
            stopAutoSlide();
            prevSlide();
            
            // Reset manual navigation flag and restart timer after a short delay
            setTimeout(() => {
                isManualNavigation = false;
                startAutoSlide();
            }, 100);
        });
    }

    // No hover pause - carousel continues regardless of mouse position

    // Initialize first slide and start auto-slide
    showSlide(currentSlide);
    startAutoSlide();
}