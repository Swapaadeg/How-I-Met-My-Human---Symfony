/**
 * Comment Reply Module
 * Handles comment reply form toggle functionality
 */

/**
 * Initialize comment reply functionality
 * Sets up reply form toggle buttons on comments
 */
export function initializeCommentReply() {
    const replyToggleButtons = document.querySelectorAll('[data-toggle-reply]');

    replyToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const commentId = this.dataset.toggleReply;
            const form = document.getElementById('reply-form-' + commentId);

            if (form) {
                // Toggle form visibility
                form.style.display = form.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
}
