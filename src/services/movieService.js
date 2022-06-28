let baseUrl = 'http://localhost:3030/data/movies';

export const getAllMovies = () => {
    return fetch(baseUrl)
            .then(res => res.json());
}

export const getMovieById = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`)
            .then(res => res.json());
}