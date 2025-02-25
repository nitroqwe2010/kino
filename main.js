const movies = [
    { title: "Peter Rabbit", rating: "6.6", genre: "Adventure, Animation, Comedy", image: "spiderman.png" },
    { title: "Mickey’s Magical Christmas", rating: "7.3", genre: "Animation, Comedy", image: "spiderman.png" },
    { title: "An Extremely Goofy Movie", rating: "6.4", genre: "Animation, Comedy, Family", image: "spiderman.png" },
    { title: "And Then I Go", rating: "6.6", genre: "Drama", image: "spiderman.png" }
];

function displayMovies(movieList) {
    const container = document.getElementById("movies-container");
    container.innerHTML = "";
    movieList.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-rating">Rating: ${movie.rating}</p>
                <p class="movie-genre">${movie.genre}</p>
            </div>
        `;
        container.innerHTML += movieCard;
    });
}

function filterMovies() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchInput) ||
        movie.genre.toLowerCase().includes(searchInput)
    );
    displayMovies(filteredMovies);
}

window.onload = () => displayMovies(movies);
