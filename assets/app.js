
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// Carrousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;
    let autoSlideInterval;

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
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for navigation buttons
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide(); // Restart auto-slide after manual navigation
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide(); // Restart auto-slide after manual navigation
        });
    }

    // Pause auto-slide on hover
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    // Start the auto-slide
    startAutoSlide();

    // Search form functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const type = document.getElementById('type-select').value;
            const sexe = document.getElementById('sexe-select').value;
            const age = document.getElementById('age-select').value;
            
            // Build query parameters
            const params = new URLSearchParams();
            if (type) params.set('type', type);
            if (sexe) params.set('sexe', sexe);
            if (age) params.set('age', age);
            
            // Redirect to animals page with filters
            const queryString = params.toString();
            const url = queryString ? `/animals?${queryString}` : '/animals';
            window.location.href = url;
        });
    }
});
