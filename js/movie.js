const API_KEY = '178cd3da6465d7a8859c635711c51b07';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// Get movie ID from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

async function getMovieDetails() {
    try {
        // Show loading state
        document.getElementById('movieDetails').innerHTML = '<p>Loading movie details...</p>';

        const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

        if (!res.ok) {
            throw new Error('Failed to fetch movie details');
        }

        const movie = await res.json();

        // Format release date
        const releaseDate = new Date(movie.release_date).toLocaleDateString();

        // Display movie details
        document.getElementById('movieDetails').innerHTML = `
            <div class="movie-detail-container">
                <div class="movie-poster">
                    <img src="${IMAGE_BASE + movie.poster_path}" alt="${movie.title}" />
                </div>
                <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p class="meta-data">
                        <span class="release-date">${releaseDate}</span> | 
                        <span class="rating">⭐ ${movie.vote_average.toFixed(1)}/10</span>
                    </p>
                    <h3>Overview</h3>
                    <p class="overview">${movie.overview}</p>
                    <div class="genres">
                        ${movie.genres.map(genre => `<span class="genre-tag">${genre.name}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('movieDetails').innerHTML = `
            <div class="error-message">
                <p>Failed to load movie details. Please try again later.</p>
                <a href="movies.html" class="back-link">← Back to Movies</a>
            </div>
        `;
    }
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', getMovieDetails);