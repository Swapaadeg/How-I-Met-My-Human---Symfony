// Search form functionality
export function initSearchForm() {
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const species = document.getElementById('type-select').value;
            const sexe = document.getElementById('sexe-select').value;
            const department = document.getElementById('department-select').value;

            // Build query parameters
            const params = new URLSearchParams();
            if (species) params.set('species', species);
            if (sexe) params.set('sexe', sexe);
            if (department) params.set('department', department);

            // Redirect to animals page with filters
            const queryString = params.toString();
            const url = queryString ? `/animals?${queryString}` : '/animals';
            window.location.href = url;
        });
    }
}