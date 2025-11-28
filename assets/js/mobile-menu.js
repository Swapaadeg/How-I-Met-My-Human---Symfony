/**
 * Mobile Menu Module
 * Handles mobile hamburger menu and action menu dropdown functionality
 */

/**
 * Initialize mobile menu functionality
 * Sets up burger toggle, mobile menu, and action menu (user dropdown)
 */
export function initializeMobileMenu() {
    const burgerToggle = document.getElementById('burgerToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenuContent = document.querySelector('.mobile-menu-content');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-auth-link');

    // Check if required elements exist
    if (!burgerToggle || !mobileMenu) {
        return;
    }

    const actionMenuToggle = document.getElementById('actionMenuToggle');
    const actionMenu = document.getElementById('actionMenu');

    /**
     * Toggle mobile menu open/closed
     */
    function toggleMenu() {
        burgerToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close mobile menu
     */
    function closeMenuHandler() {
        burgerToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        closeActionMenu();
    }

    /**
     * Toggle action menu (user dropdown)
     */
    function toggleActionMenu() {
        if (actionMenu) {
            actionMenu.classList.toggle('active');
            actionMenuToggle.classList.toggle('active');
        }
    }

    /**
     * Close action menu
     */
    function closeActionMenu() {
        if (actionMenu) {
            actionMenu.classList.remove('active');
            actionMenuToggle.classList.remove('active');
        }
    }

    // Attach event listeners for burger menu
    burgerToggle.addEventListener('click', toggleMenu);

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMenuHandler);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenuHandler);
    }

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenuHandler);
    });

    // Action menu - hover behavior with delay
    const actionMenuWrapper = document.querySelector('.action-menu-wrapper');
    let closeMenuTimeout;

    if (actionMenuWrapper) {
        actionMenuWrapper.addEventListener('mouseenter', function() {
            clearTimeout(closeMenuTimeout);
            if (actionMenu) {
                actionMenu.classList.add('active');
                actionMenuToggle.classList.add('active');
            }
        });

        actionMenuWrapper.addEventListener('mouseleave', function() {
            closeMenuTimeout = setTimeout(function() {
                closeActionMenu();
            }, 100);
        });

        // Close action menu when clicking on a link inside
        if (actionMenu) {
            actionMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeActionMenu);
            });
        }
    }
}
