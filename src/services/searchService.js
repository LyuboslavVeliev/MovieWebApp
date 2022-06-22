import { getAllMovies } from '../services/movieService.js';

export function search(e) {
    let value = e.target.value;

    let allmovieElements = document.querySelectorAll('.card');
    let index = 0;

    getAllMovies().then(movies => {
        let allMovies = [];
            movies.forEach(movie => {
                    allMovies.push({movie, element: allmovieElements[index]})
                    index++;
                })

            allMovies.forEach(data => {
              let isVisible = data.movie.title.toLowerCase().includes(value.toLowerCase());
              data.element.classList.toggle('hidden', !isVisible);
            });
        })
}