// Carrousel bannière automatique toutes les 5 secondes
export function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');

    let currentSlide = 0;
    let autoSlideInterval = null;

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

    function startAutoSlide() {
        // Force stop any existing interval
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }

        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    // Initialize first slide and start auto-slide
    showSlide(currentSlide);
    startAutoSlide();
}