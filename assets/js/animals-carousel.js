document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.animals-carousel');
    const cards = document.querySelectorAll('.carousel-card');
    const indicators = document.querySelectorAll('.indicator-dot');
    
    if (!carousel || cards.length === 0) return;
    
    let currentIndex = 0;
    
    // Initialiser le carrousel
    function initCarousel() {
        updateCarousel();
    }
    
    // Mettre à jour les positions des cartes
    function updateCarousel() {
        cards.forEach((card, index) => {
            // Réinitialiser toutes les classes
            card.classList.remove('center', 'left', 'right', 'back-left', 'back-right', 'far-back-left', 'far-back-right', 'hidden', 'hidden-right');
            
            // Calculer la position relative
            let relativePos = index - currentIndex;
            
            // Gérer le wraparound circulaire
            if (relativePos > cards.length / 2) {
                relativePos -= cards.length;
            } else if (relativePos < -cards.length / 2) {
                relativePos += cards.length;
            }
            
            // Assigner les classes selon la position
            switch (relativePos) {
                case 0:
                    card.classList.add('center');
                    break;
                case -1:
                    card.classList.add('left');
                    break;
                case 1:
                    card.classList.add('right');
                    break;
                case -2:
                    card.classList.add('back-left');
                    break;
                case 2:
                    card.classList.add('back-right');
                    break;
                case -3:
                    card.classList.add('far-back-left');
                    break;
                case 3:
                    card.classList.add('far-back-right');
                    break;
                default:
                    if (relativePos < 0) {
                        card.classList.add('hidden');
                    } else {
                        card.classList.add('hidden-right');
                    }
                    break;
            }
        });
        
        // Mettre à jour les indicateurs
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Aller à un slide spécifique
    function goToSlide(index) {
        if (index >= 0 && index < cards.length && index !== currentIndex) {
            currentIndex = index;
            updateCarousel();
        }
    }
    
    // Écouteurs d'événements pour les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Écouteurs d'événements pour les cartes
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Si ce n'est pas la carte centrale, empêcher toute navigation et aller vers cette carte
            if (!card.classList.contains('center')) {
                // Empêcher tous les comportements par défaut
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                // Naviguer vers cette carte
                goToSlide(index);
                return false;
            }
            // Si c'est la carte centrale, laisser les liens fonctionner normalement
        });
        
        // Intercepter tous les clics sur les éléments de la carte
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('center')) {
                // Vérifier si c'est un bouton d'action
                const isActionBtn = e.target.closest('.action-btn');
                if (!isActionBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    goToSlide(index);
                    return false;
                }
            }
        }, true); // Utiliser la phase de capture
    });
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
            goToSlide(prevIndex);
        } else if (e.key === 'ArrowRight') {
            const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
            goToSlide(nextIndex);
        }
    });
    
    // Initialiser
    initCarousel();
});