document.getElementById('searchBox').addEventListener('keyup', async function(e) {
    const query = e.target.value;
    if (query.length < 3) return;
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    displayMovies(data.results);
});