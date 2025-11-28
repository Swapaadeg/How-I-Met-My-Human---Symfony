/**
 * Contact Modal Module
 * Manages contact form modal loading and submission via AJAX
 */

// Import notification function from animals module
import { showNotification } from './animals.js';

/**
 * Initialize contact modal functionality
 * Attaches event listeners to all contact buttons
 */
export function initializeContactModal() {
    // Initialize contact button event listeners
    const contactButtons = document.querySelectorAll('.contact-btn');

    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const animalId = this.dataset.animalId;
            const associationId = this.dataset.associationId;

            if (animalId) {
                openContactModal(`/contact/animal/${animalId}`);
            } else if (associationId) {
                openContactModal(`/contact/association/${associationId}`);
            } else {
                // General contact form
                openContactModal('/contact');
            }
        });
    });
}

function openContactModal(url) {
    // Créer la modal
    const modal = document.createElement('div');
    modal.className = 'contact-modal-overlay';
    modal.innerHTML = `
        <div class="contact-modal">
            <button class="contact-modal-close">&times;</button>
            <div class="contact-modal-body">
                <div class="loader">
                    <i class="fas fa-spinner fa-spin"></i> Chargement...
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Charger le formulaire
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const modalBody = modal.querySelector('.contact-modal-body');
            modalBody.innerHTML = html;

            // Initialiser le formulaire
            initializeContactForm(modal);
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Erreur lors du chargement du formulaire', 'error');
            closeContactModal(modal);
        });

    // Événements de fermeture
    const closeBtn = modal.querySelector('.contact-modal-close');
    closeBtn.addEventListener('click', () => closeContactModal(modal));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeContactModal(modal);
        }
    });

    // Fermeture avec Escape
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeContactModal(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function closeContactModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
    }, 300);
}

function initializeContactForm(modal) {
    const form = modal.querySelector('.contact-form-ajax');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit-contact');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showNotification(data.message, 'success');
                closeContactModal(modal);
            } else {
                showNotification(data.message, 'error');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Erreur lors de l\'envoi du message', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });
}

// Also make available globally for backward compatibility
window.ContactModal = {
    open: openContactModal,
    close: closeContactModal,
    initialize: initializeContactModal
};
