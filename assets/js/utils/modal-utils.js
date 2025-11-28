/**
 * Modal Utility Functions
 * Shared functions for modal management across the application
 */

/**
 * Close the flash message modal
 * Used in various templates (mot_de_passe/reset.html.twig, post_registration_association.html.twig, auth.html.twig)
 */
export function fermerModale() {
    const modale = document.getElementById('modale-flash');
    if (modale) {
        modale.style.display = 'none';
    }
}

/**
 * Initialize fermerModale on DOMContentLoaded
 * Automatically closes any flash modals when the page loads
 */
export function initializeModalUtils() {
    // Make fermerModale available globally for inline onclick handlers in HTML
    window.fermerModale = fermerModale;
}
