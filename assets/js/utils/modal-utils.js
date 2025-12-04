//Les fonctions utilitaires pour les modales
export function fermerModale() {
    const modale = document.getElementById('modale-flash');
    if (modale) {
        modale.style.display = 'none';
    }
}

export function initializeModalUtils() {
    window.fermerModale = fermerModale;
}
