/**
 * Join Form Module
 * Handles association join form interactions
 */

/**
 * Initialize join form functionality
 * Enables/disables the join button based on radio selection
 */
export function initializeJoinForm() {
    const associationRadios = document.querySelectorAll('input[name="association_id"]');
    const joinBtn = document.getElementById('joinBtn');

    // Check if required elements exist
    if (associationRadios.length === 0 || !joinBtn) {
        return;
    }

    // Enable button when a radio is selected
    associationRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            joinBtn.disabled = false;
        });
    });
}
