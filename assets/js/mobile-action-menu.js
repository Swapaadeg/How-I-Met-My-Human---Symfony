/**
 * Mobile Action Menu Module
 * Handles the dropdown toggle for "Accès rapide" in mobile menu
 */

export function initializeMobileActionMenu() {
    const mobileActionToggle = document.getElementById('mobileActionToggle');
    const mobileActionMenu = document.getElementById('mobileActionMenu');

    // Check if mobile action menu exists
    if (!mobileActionToggle || !mobileActionMenu) {
        return;
    }

    /**
     * Toggle mobile action menu open/closed
     */
    function toggleMobileActionMenu() {
        mobileActionToggle.classList.toggle('active');
        mobileActionMenu.classList.toggle('active');
    }

    /**
     * Close mobile action menu
     */
    function closeMobileActionMenu() {
        mobileActionToggle.classList.remove('active');
        mobileActionMenu.classList.remove('active');
    }

    // Toggle menu on button click
    mobileActionToggle.addEventListener('click', toggleMobileActionMenu);

    // Close menu when clicking on a link inside
    const mobileActionLinks = mobileActionMenu.querySelectorAll('.mobile-action-link');
    mobileActionLinks.forEach(link => {
        link.addEventListener('click', closeMobileActionMenu);
    });
}
