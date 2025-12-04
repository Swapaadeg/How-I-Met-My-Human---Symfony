/**
 * Animals Module
 * Main entry point for animal-related functionality
 */

import { initializeFavoriteButtons, addFavorite, removeFavorite } from './modules/favorites.js';
import { showNotification } from './modules/notifications.js';
import { initializeTooltips } from './modules/tooltips.js';
import { initializeAnimalCards, initializeSeeMoreButtons } from './modules/animalCards.js';

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

    // Initialize tooltips
    initializeTooltips();
}

/**
 * Export functions for external use
 */
export {
    showNotification,
    addFavorite,
    removeFavorite,
    initializeTooltips
};

// Also make available globally for backward compatibility
window.AnimalCards = {
    addFavorite,
    removeFavorite,
    showNotification,
    initializeTooltips
};
