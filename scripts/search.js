document.getElementById('searchForm').addEventListener('submit', function(event) {
    var searchValue = document.getElementById('searchBox').value.trim().toLowerCase();
    
    if (searchValue === 'complete html tutorial' || 
        searchValue === 'complete css tutorial' || 
        searchValue === 'complete js tutorial' || searchValue === 'courses') {
        event.preventDefault(); 
        window.location.href = 'courses.html'; 
    }
});