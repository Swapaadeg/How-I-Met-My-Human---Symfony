/*
 * Main Application File
 * Central initialization point for all JavaScript modules
 * Each module is imported and initialized when its corresponding DOM elements exist
 */

import './styles/app.scss';

// Import homepage carousels
import { initCarousel } from './js/carousel.js';
import { initAnimalsCarousel } from './js/animals-carousel.js';
import { initializeNewsCarousel } from './js/news-carousel.js';

// Import search and form functionality
import { initSearchForm } from './js/searchForm.js';

// Import animals page modules
import { initializeAnimals } from './js/animals.js';
import { initializeContactModal } from './js/contact-modal.js';

// Import authentication module
import { initAuth } from './js/auth.js';

// Import utility modules
import { initializeMobileMenu } from './js/mobile-menu.js';
import { initializeMobileActionMenu } from './js/mobile-action-menu.js';
import { initializeCommentReply } from './js/comment-reply.js';
import { initializeJoinForm } from './js/join-form.js';
import { initializeModalUtils } from './js/utils/modal-utils.js';
import { initializeAllFileInputDisplays } from './js/utils/file-input-display.js';

/**
 * Central application initialization
 * Called when DOM is fully loaded
 * Each feature is conditionally initialized based on DOM element presence
 */
document.addEventListener('DOMContentLoaded', function() {
    // ==================== GLOBAL UTILITIES ====================
    // Initialize utilities that may be used across multiple pages
    initializeModalUtils();
    initializeAllFileInputDisplays();

    // ==================== LAYOUT & NAVIGATION ====================
    // Mobile menu (used on all pages)
    initializeMobileMenu();
    initializeMobileActionMenu();

    // ==================== HOMEPAGE FEATURES ====================
    // Hero carousel - auto-rotating slideshow
    if (document.querySelector('.hero-carousel')) {
        initCarousel();
    }

    // Animals carousel - 10 oldest animals with navigation
    if (document.querySelector('.animals-carousel')) {
        initAnimalsCarousel();
    }

    // News carousel - infinite scroll news section
    if (document.querySelector('.news-carousel')) {
        initializeNewsCarousel();
    }

    // Scroll indicator - clickable paw to scroll to animals section
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const targetSection = document.querySelector('.oldest-animals-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }

    // ==================== ANIMALS PAGE & HOMEPAGE ====================
    // Animal cards grid with favorites, sharing, etc.
    // Works on both /animals page (animals-grid) and homepage (animals-carousel)
    if (document.querySelector('.animals-grid') || document.querySelector('.animals-carousel') || document.querySelector('.favorite-btn')) {
        initializeAnimals();
    }

    // Contact modal (for animal/association contact)
    const contactButtons = document.querySelectorAll('.contact-btn');
    if (contactButtons.length > 0) {
        initializeContactModal();
    }

    // ==================== ANIMAL DETAIL PAGE ====================
    // Comment reply forms
    const replyButtons = document.querySelectorAll('[data-toggle-reply]');
    if (replyButtons.length > 0) {
        initializeCommentReply();
    }

    // ==================== AUTHENTICATION PAGES ====================
    // Auth panel switching (sign up / sign in)
    if (document.getElementById('authWrapper')) {
        initAuth();
    }

    // ==================== SEARCH PAGE ====================
    // Search form with filters
    if (document.querySelector('.search-form')) {
        initSearchForm();
    }

    // ==================== ASSOCIATION PAGES ====================
    // Join association form
    const associationRadios = document.querySelectorAll('input[name="association_id"]');
    if (associationRadios.length > 0) {
        initializeJoinForm();
    }
});