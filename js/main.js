const API_KEY = '178cd3da6465d7a8859c635711c51b07';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

async function getMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    const container = document.getElementById('movieList');
    container.innerHTML = '';
    movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'movie-card';
        div.innerHTML = `
      <a href="movie.html?id=${movie.id}">
        <img src="${IMAGE_BASE + movie.poster_path}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
      </a>`;
        container.appendChild(div);
    });
}

window.onload = getMovies;