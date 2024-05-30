/**
 * Crea una tarjeta de película.
 *
 * @param {Object} movie - El objeto de la película.
 * @returns {HTMLDivElement} La tarjeta de película creada.
 */
function createMovieCard(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("acclaimedImageContainer");

    const cardLink = document.createElement("a");
    cardLink.href = "../pages/detail.html";

    const cardImage = document.createElement("img");
    cardImage.src = movie.Poster;
    cardImage.alt = movie.title;
    cardImage.loading = "lazy";

    cardLink.appendChild(cardImage);
    movieCard.appendChild(cardLink);

    return movieCard;
}

/**
 * Recupera las películas desde la API.
 *
 * @returns {Promise<Object[]>} Una promesa que resuelve en un array de objetos de películas.
 */
async function fetchMovies() {
    const API_SERVER = "https://www.omdbapi.com/?apikey=e4edead7&s=rings&page=1&type=movie";
    
    try {
        const response = await fetch(API_SERVER);
        const data = await response.json();
        const movies = data.Search;
        return movies;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Renderiza las películas en la galería.
 *
 * @param {Object[]} movies - Un array de objetos de películas.
 */
const renderMovies = (movies) => {
    if (movies && movies.length > 0) 
    {
        const acclaimedGalery = document.getElementById("acclaimedGalery");
        acclaimedGalery.innerHTML = "";
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            acclaimedGalery.appendChild(movieCard);
        });
    } 
    else 
    {
        console.error("No hay películas para renderizar");
    }
}

/**
 * Añade un manejador de eventos al documento que se ejecuta cuando el contenido se ha cargado completamente.
 * El manejador de eventos se encarga de recuperar y renderizar las películas populares.
 */
document.addEventListener("DOMContentLoaded", async () => {
    const movies = await fetchMovies();
    renderMovies(movies);
});
