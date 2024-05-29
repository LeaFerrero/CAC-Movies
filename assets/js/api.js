function createMovieCard(movie){
    const movieCard = document.createElement("div");
    movieCard.classList.add("acclaimedImageContainer");

    const cardLink = document.createElement("a");
    cardLink.href = "../pages/detail.html";

    const cardImage = document.createElement("img");
    cardImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    cardImage.alt = movie.title;
    cardImage.loading = "lazy";

    cardLink.appendChild(cardImage);
    movieCard.appendChild(cardLink);

    return movieCard;
}


async function fetchMovies() {
    const API_SERVER = "https://api.themoviedb.org/3";
    const options = {
        method: "GET",
        accept: "aplication/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8"
    }
    
    try{
        const response = await fetch(`${API_SERVER}/movie/popular?page=1`, options);
        const data = await response.json();
        const movies = data.results;
        return movies;
    }catch(error){
        console.error(error);
        return [];
    }
}

const renderMovies = (movies) => {
    if(movies && movies.length > 0)
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
        console.error("No hay peliculas para renderizar");
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const movies = await fetchMovies();
    renderMovies(movies);
});