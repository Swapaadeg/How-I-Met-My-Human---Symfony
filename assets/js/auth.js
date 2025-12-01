/**
 * Authentication Module
 * Handles auth panel switching, animations, and form interactions
 */

// Import shared utilities
import { initializeFileInputDisplay } from './utils/file-input-display.js';

/**
 * Initialize authentication UI
 * Sets up sign up/sign in panel switching, animations, and floating label effects
 */
export function initAuth() {
    const authWrapper = document.getElementById('authWrapper');

    // If not on auth page, skip initialization
    if (!authWrapper) {
        return;
    }

    const signUpBtn = document.getElementById('sign-up-btn');
    const signInBtn = document.getElementById('sign-in-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Function to switch to sign up mode
    function switchToSignUp() {
        authWrapper.classList.add('sign-up-mode');

        // Animate login panel elements fading out
        const loginAnimations = document.querySelectorAll('.login-panel .animation');
        loginAnimations.forEach((el, index) => {
            el.style.animation = `fadeOut 0.6s ease-in-out ${index * 0.1}s forwards`;
        });

        // Animate register panel elements fading in
        const registerAnimations = document.querySelectorAll('.register-panel .animation');
        registerAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate2 0.6s ease-in-out ${index * 0.1}s forwards`;
            }, 300);
        });
    }

    // Function to switch to sign in mode
    function switchToSignIn() {
        authWrapper.classList.remove('sign-up-mode');

        // Animate register panel elements fading out
        const registerAnimations = document.querySelectorAll('.register-panel .animation');
        registerAnimations.forEach((el, index) => {
            el.style.animation = `fadeOut 0.6s ease-in-out ${index * 0.1}s forwards`;
        });

        // Animate login panel elements fading in
        const loginAnimations = document.querySelectorAll('.login-panel .animation');
        loginAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate 0.6s ease-in-out ${index * 0.1}s forwards`;
            }, 300);
        });
    }

    // Attach button click handlers
    if (signUpBtn) {
        signUpBtn.addEventListener('click', switchToSignUp);
    }

    if (signInBtn) {
        signInBtn.addEventListener('click', switchToSignIn);
    }

    // Animation on initial page load
    function initAnimations() {
        const loginAnimations = document.querySelectorAll('.login-panel .animation');
        const infoAnimations = document.querySelectorAll('.info-panel .animation');

        loginAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate 0.6s ease-in-out forwards`;
            }, index * 100);
        });

        infoAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate 0.6s ease-in-out forwards`;
            }, index * 100 + 200);
        });
    }

    // Initialize animations
    initAnimations();

    // Floating label effect for form inputs
    const inputs = document.querySelectorAll('.input-box input');
    inputs.forEach(input => {
        // Check if field has value on load
        if (input.value) {
            input.classList.add('has-value');
        }

        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
                this.classList.remove('has-value');
            } else {
                this.classList.add('has-value');
            }
        });

        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });

    // Conditional display of association fields
    const associationRadios = document.querySelectorAll('input[name="register_form[association_choice]"]');
    const existingAssociationSelect = document.querySelector('.association-select');
    const newAssociationField = document.querySelector('.new-association-field');

    if (associationRadios.length > 0) {
        associationRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                const selectedValue = this.value;

                // Hide all fields by default
                if (existingAssociationSelect) {
                    existingAssociationSelect.style.display = 'none';
                    existingAssociationSelect.removeAttribute('required');
                }
                if (newAssociationField) {
                    newAssociationField.style.display = 'none';
                    newAssociationField.removeAttribute('required');
                }

                // Show appropriate field based on selection
                if (selectedValue === 'join' && existingAssociationSelect) {
                    existingAssociationSelect.style.display = 'block';
                    existingAssociationSelect.setAttribute('required', 'required');
                } else if (selectedValue === 'create' && newAssociationField) {
                    newAssociationField.style.display = 'block';
                    newAssociationField.setAttribute('required', 'required');
                }
            });
        });
    }

    // Initialize file input display for profile image
    initializeFileInputDisplay('#register_imageFile_file', '#file-name-display');
}

/**
 * Inject CSS animations for auth module
 * Should be called once to add fade out animation to document
 */
function injectAuthStyles() {
    const styleId = 'auth-fadeout-styles';

    // Only inject once
    if (document.getElementById(styleId)) {
        return;
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @keyframes fadeOut {
            0% {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
            }
            100% {
                opacity: 0;
                filter: blur(5px);
                transform: translateX(-40px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Inject styles when module loads
injectAuthStyles();