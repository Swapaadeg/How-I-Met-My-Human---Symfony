// Custom select functionality that opens upward
export function initCustomSelects() {
    const selectFields = document.querySelectorAll('.search-field');
    
    selectFields.forEach(field => {
        const select = field.querySelector('select');
        if (!select) return;
        
        // Créer le bouton personnalisé
        const customButton = document.createElement('button');
        customButton.type = 'button';
        customButton.className = 'custom-select-button';
        
        const buttonText = document.createElement('span');
        buttonText.textContent = select.options[0].textContent; // Texte par défaut
        
        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.innerHTML = '▼';
        
        customButton.appendChild(buttonText);
        customButton.appendChild(arrow);
        
        // Créer le dropdown personnalisé
        const dropdown = document.createElement('div');
        dropdown.className = 'custom-dropdown';
        
        // Ajouter les options
        Array.from(select.options).forEach((option, index) => {
            if (index === 0) return; // Ignorer la première option vide
            
            const dropdownOption = document.createElement('div');
            dropdownOption.className = 'dropdown-option';
            dropdownOption.textContent = option.textContent;
            dropdownOption.dataset.value = option.value;
            
            dropdownOption.addEventListener('click', () => {
                select.value = option.value;
                select.dispatchEvent(new Event('change'));
                buttonText.textContent = option.textContent;
                dropdown.classList.remove('open');
                arrow.classList.remove('open');
                
                // Mettre à jour l'affichage
                field.querySelectorAll('.dropdown-option').forEach(opt => opt.classList.remove('selected'));
                dropdownOption.classList.add('selected');
            });
            
            dropdown.appendChild(dropdownOption);
        });
        
        // Ajouter les éléments au field
        field.appendChild(customButton);
        field.appendChild(dropdown);
        
        // Gérer l'ouverture/fermeture
        customButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Fermer tous les autres dropdowns
            document.querySelectorAll('.custom-dropdown.open').forEach(dd => {
                if (dd !== dropdown) {
                    dd.classList.remove('open');
                    dd.parentElement.querySelector('.arrow').classList.remove('open');
                }
            });
            
            dropdown.classList.toggle('open');
            arrow.classList.toggle('open');
        });
        
        // Fermer quand on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!field.contains(e.target)) {
                dropdown.classList.remove('open');
                arrow.classList.remove('open');
            }
        });
    });
}