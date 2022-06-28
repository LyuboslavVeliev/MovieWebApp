import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

let movieDetailsTemplate = (movie) => html`
    <div class="card mb-3">
        <img src=${movie.img} style="width: 400px; height: 500px" class="card-img-top" alt=${movie.title}>
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
`;

export const movieDetailsView = (ctx) => {
    let movieId = ctx.params.movieId;
    let movie = movieService.getMovieById(movieId).then(movie => {
        return ctx.render(movieDetailsTemplate.bind(null, movie));
    });
}