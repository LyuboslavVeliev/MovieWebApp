let baseUrl = 'http://localhost:3030/data/movies';

export const getAllMovies = () => {
    return fetch(baseUrl)
            .then(res => res.json());
}