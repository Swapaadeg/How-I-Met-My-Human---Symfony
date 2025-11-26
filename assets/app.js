/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

// Import all functionality modules
import { initCarousel } from './js/carousel.js';
import { initSearchForm } from './js/searchForm.js';
import './js/auth.js';
import './js/animals.js';
import './js/animals-carousel.js';
import './js/news-carousel.js';
import './js/contact-modal.js';

console.log('How I Met My Human - Application loaded! 🐾');

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Route 1: Homepage - Initialize carousel if carousel elements exist
    if (document.querySelector('.hero-carousel')) {
        console.log('Initializing carousel...');
        initCarousel();
    }
    
    // Route 2: Search form - Initialize if search form exists
    if (document.querySelector('.search-form')) {
        console.log('Initializing search form...');
        initSearchForm();
    }

    // Add more routes here as needed for future features
    // Route 4: Contact form
    // if (document.querySelector('.contact-form')) { initContactForm(); }
    
    // Route 5: Animal listings - Initialize if animals grid exists
    if (document.querySelector('.animals-grid')) {
        console.log('Initializing animal cards...');
        // Animals functionality is auto-initialized in animals.js
    }
    
    // Route 6: Scroll indicator - Make paw clickable to scroll to animals section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const targetSection = document.querySelector('.oldest-animals-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        // Make it visually clickable
        scrollIndicator.style.cursor = 'pointer';
    }
    
    console.log('✅ Application initialization complete!');
});