/*Tooltips Module*/

export function initializeTooltips() {
    const tagsWithTooltips = document.querySelectorAll('.tag[data-tooltip], .tag-mini[data-tooltip]');

    tagsWithTooltips.forEach(tag => {
        // Add hover events for better tooltip positioning
        tag.addEventListener('mouseenter', function(e) {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                // Position tooltip to avoid viewport overflow
                const rect = this.getBoundingClientRect();
                const tooltipElement = this;

                // Adjust tooltip position if near viewport edges
                setTimeout(() => {
                    const pseudoElement = window.getComputedStyle(tooltipElement, '::before');
                    if (rect.left < 150) {
                        tooltipElement.style.setProperty('--tooltip-align', 'left');
                    } else if (rect.right > window.innerWidth - 150) {
                        tooltipElement.style.setProperty('--tooltip-align', 'right');
                    }
                }, 10);
            }
        });

        tag.addEventListener('mouseleave', function() {
            // Reset tooltip position
            this.style.removeProperty('--tooltip-align');
        });

        // Add click event for mobile devices
        tag.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const tooltip = this.getAttribute('data-tooltip');
                const tagName = this.getAttribute('data-tag-name');

                if (tooltip) {
                    showTagModal(tagName, tooltip);
                }
            }
        });
    });
}

export function showTagModal(tagName, description) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.tag-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'tag-modal';
    modal.innerHTML = `
        <div class="tag-modal-content">
            <div class="tag-modal-header">
                <h3>${tagName}</h3>
                <button class="tag-modal-close">&times;</button>
            </div>
            <div class="tag-modal-body">
                <p>${description}</p>
            </div>
        </div>
        <div class="tag-modal-backdrop"></div>
    `;

    // Add to page
    document.body.appendChild(modal);

    // Close modal events
    const closeBtn = modal.querySelector('.tag-modal-close');
    const backdrop = modal.querySelector('.tag-modal-backdrop');

    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}
