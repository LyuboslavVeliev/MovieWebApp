import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../services/movieService.js';

let allMovies = await getAllMovies();

let homeTemplate = () => html`
    <section class="home">
        <ul id="movie-list">
            ${allMovies.map(movie => {
                let movieCardElement = () => html`
                    <li class="card" style="width: 18rem; height: 700px">
                        <img width="300px" height="400px" src=${movie.img} class="card-img-top" alt=${movie.title}>
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.description}</p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </li>`
                

                return movieCardElement();
            })}
        </ul>
    </section>
`;

function homeView(ctx) {
    return ctx.render(homeTemplate);
}

export default homeView;