// Gestion de l'interface d'authentification avec effet slide

document.addEventListener('DOMContentLoaded', function() {
    const authWrapper = document.getElementById('authWrapper');
    const signUpBtn = document.getElementById('sign-up-btn');
    const signInBtn = document.getElementById('sign-in-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Fonction pour passer en mode inscription
    function switchToSignUp() {
        authWrapper.classList.add('sign-up-mode');
        
        // Animation des éléments de connexion qui disparaissent
        const loginAnimations = document.querySelectorAll('.login-panel .animation');
        loginAnimations.forEach((el, index) => {
            el.style.animation = `fadeOut 0.6s ease-in-out ${index * 0.1}s forwards`;
        });
        
        // Animation des éléments d'inscription qui apparaissent
        const registerAnimations = document.querySelectorAll('.register-panel .animation');
        registerAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate2 0.6s ease-in-out ${index * 0.1}s forwards`;
            }, 300);
        });
    }

    // Fonction pour passer en mode connexion
    function switchToSignIn() {
        authWrapper.classList.remove('sign-up-mode');
        
        // Animation des éléments d'inscription qui disparaissent
        const registerAnimations = document.querySelectorAll('.register-panel .animation');
        registerAnimations.forEach((el, index) => {
            el.style.animation = `fadeOut 0.6s ease-in-out ${index * 0.1}s forwards`;
        });
        
        // Animation des éléments de connexion qui apparaissent
        const loginAnimations = document.querySelectorAll('.login-panel .animation');
        loginAnimations.forEach((el, index) => {
            setTimeout(() => {
                el.style.animation = `animate 0.6s ease-in-out ${index * 0.1}s forwards`;
            }, 300);
        });
    }

    // Événements des boutons
    if (signUpBtn) {
        signUpBtn.addEventListener('click', switchToSignUp);
    }

    if (signInBtn) {
        signInBtn.addEventListener('click', switchToSignIn);
    }

    // Gestion de la soumission des formulaires
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // Le formulaire de connexion se soumet normalement
            // Symfony gère l'authentification
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            // Le formulaire d'inscription se soumet normalement
            // Le contrôleur gère l'inscription
        });
    }

    // Animation d'entrée au chargement de la page
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

    // Initialiser les animations
    initAnimations();

    // Gestion des labels flottants pour les champs de formulaire
    const inputs = document.querySelectorAll('.input-box input');
    inputs.forEach(input => {
        // Vérifier si le champ a une valeur au chargement
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

    // Gestion de l'affichage conditionnel des champs d'association
    const associationRadios = document.querySelectorAll('input[name="register_form[association_choice]"]');
    const existingAssociationSelect = document.querySelector('.association-select');
    const newAssociationField = document.querySelector('.new-association-field');

    if (associationRadios.length > 0) {
        associationRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                const selectedValue = this.value;
                
                // Masquer tous les champs par défaut
                if (existingAssociationSelect) {
                    existingAssociationSelect.style.display = 'none';
                    existingAssociationSelect.removeAttribute('required');
                }
                if (newAssociationField) {
                    newAssociationField.style.display = 'none';
                    newAssociationField.removeAttribute('required');
                }

                // Afficher le champ approprié selon le choix
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
});

// Animation CSS pour la disparition des éléments
const style = document.createElement('style');
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

// Fonction pour fermer les modales flash (réutilisée)
function fermerModale() {
    const modale = document.getElementById('modale-flash');
    if (modale) {
        modale.style.display = 'none';
    }
}