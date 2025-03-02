const API_KEY = 'ebc90924a0ceae723e6936c9175db961';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`;

async function fetchMovies() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let movies = data.results;

        let movieContainer = document.getElementById('movie-container');
        movieContainer.innerHTML = '';
        let movieContainer1 = document.getElementsByClassName('banner')[0];
        movieContainer1.innerHTML = '';

        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            let movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}" width="100%" height="100%"><p>${movie.title}</p>`;
            movieContainer.appendChild(movieElement);
        }
        for(let j=0;j < movies.length;j=j+5)
        {
            let movie = movies[j+1];
            let movieElement = document.createElement('div');
            movieElement.style.height="280px";
            movieElement.style.padding="0px";
            movieElement.style.margin="0px";
            movieElement.classList.add('bannermovie');
            movieElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}" width="100px" height="100px">`;
            movieContainer1.appendChild(movieElement);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
fetchMovies();
