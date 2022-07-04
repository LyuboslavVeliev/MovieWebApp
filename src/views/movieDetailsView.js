import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

let movieDetailsTemplate = (movie, isAdmin) => html`
    <div class="card mb-3">
        <img src=${movie.img} style="width: 400px; height: 500px" class="card-img-top" alt=${movie.title}>
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        ${ 
            isAdmin
            ?
            html`<div class="col-auto details-buttons">
                <a class="details-button" href="/movies/${movie._id}/edit">Edit</a>
                <a class="details-button" href="/delete">Delete</a>
            </div>`
            :
            nothing
        }
        
    </div>
`;

export const movieDetailsView = (ctx) => {

    let movieId = ctx.params.movieId;
    let movie = movieService.getMovieById(movieId).then(movie => {
        return ctx.render(movieDetailsTemplate(movie, ctx.isAdmin));
    });
}