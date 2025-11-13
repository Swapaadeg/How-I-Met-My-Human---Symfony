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
import { initCustomSelects } from './js/customSelects.js';
import './controllers/authAnimation.js';

console.log('How I Met My Human - Application loaded! 🐾');

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Route 1: Homepage - Initialize carousel if carousel elements exist
    if (document.querySelector('.hero-carousel')) {
        console.log('🎠 Initializing carousel...');
        initCarousel();
    }
    
    // Route 2: Search form - Initialize if search form exists
    if (document.querySelector('.search-form')) {
        console.log('🔍 Initializing search form...');
        initSearchForm();
    }
    
    // Route 3: Custom selects - Initialize if search fields exist
    if (document.querySelector('.search-field')) {
        console.log('📋 Initializing custom selects...');
        initCustomSelects();
    }
    
    // Add more routes here as needed for future features
    // Route 4: Contact form
    // if (document.querySelector('.contact-form')) { initContactForm(); }
    
    // Route 5: Animal listings  
    // if (document.querySelector('.animals-grid')) { initAnimalGrid(); }
    
    console.log('✅ Application initialization complete!');
});