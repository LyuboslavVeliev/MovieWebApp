import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../services/movieService.js';

let homeTemplate = (allMovies) => html`
    <section class="home">
        <ul id="movie-list">
            ${allMovies.map(movie => {
                let movieCardElement = () => html`
                    <li class="card" style="width: 200px; height: 420px">
                        <img width="100%" height="300px" src=${movie.img} class="card-img-top" alt=${movie.title}>
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <div class="card-actions">
                                <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </li>`
                

                return movieCardElement();
            })}
        </ul>
    </section>
`;

async function homeView(ctx) {
    let allMovies = await getAllMovies();

    return ctx.render(homeTemplate(allMovies));
}

export default homeView;