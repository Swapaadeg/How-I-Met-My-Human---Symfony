/**
 * File Input Display Utility
 * Manages display of selected file names in file input fields
 * Used in: security/auth.html.twig, adopter_news/new.html.twig
 */

/**
 * Initialize file input display for a specific file input and display element
 * @param {string} inputSelector - CSS selector for the file input element
 * @param {string} displaySelector - CSS selector for the element to display the filename in
 * @param {string} defaultText - Default text to show when no file is selected (default: "Aucun fichier")
 */
export function initializeFileInputDisplay(inputSelector, displaySelector, defaultText = 'Aucun fichier') {
    const fileInput = document.querySelector(inputSelector);
    const fileNameDisplay = document.querySelector(displaySelector);

    if (!fileInput || !fileNameDisplay) {
        console.warn(`File input display: Could not find elements for "${inputSelector}" or "${displaySelector}"`);
        return;
    }

    // Set initial display text
    fileNameDisplay.textContent = defaultText;

    // Update display on file selection change
    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = defaultText;
        }
    });
}

/**
 * Initialize all file input displays on the page
 * Looks for elements with data-file-input-display attribute
 *
 * Usage in HTML:
 * <input type="file" id="register_imageFile_file" data-file-input-display="file-name-display">
 * <span id="file-name-display">Aucun fichier</span>
 */
export function initializeAllFileInputDisplays() {
    const fileInputs = document.querySelectorAll('[data-file-input-display]');

    fileInputs.forEach(fileInput => {
        const displayElementId = fileInput.getAttribute('data-file-input-display');
        const displayElement = document.getElementById(displayElementId);

        if (displayElement) {
            const defaultText = displayElement.textContent || 'Aucun fichier';
            initializeFileInputDisplay(
                `#${fileInput.id}`,
                `#${displayElementId}`,
                defaultText
            );
        }
    });
}
