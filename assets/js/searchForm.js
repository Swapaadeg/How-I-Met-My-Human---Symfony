// Search form functionality
export function initSearchForm() {
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const type = document.getElementById('type-select').value;
            const sexe = document.getElementById('sexe-select').value;
            const age = document.getElementById('age-select').value;
            
            // Build query parameters
            const params = new URLSearchParams();
            if (type) params.set('type', type);
            if (sexe) params.set('sexe', sexe);
            if (age) params.set('age', age);
            
            // Redirect to animals page with filters
            const queryString = params.toString();
            const url = queryString ? `/animals?${queryString}` : '/animals';
            window.location.href = url;
        });
    }
}