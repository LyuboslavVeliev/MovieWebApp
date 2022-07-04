import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMovie, getMovieById } from '../services/movieService.js';

let editMovieTemplate = (movie) => html`
    <section class="padding-30">
          <h3>Edit Movie</h3>
        <form  @submit=${(e) => editMovie(e, movie._id)} class="col g-3">
            <div class="mb-3 row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input type="text" value=${movie.title} class="form-control" name="title" id="title">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea class="form-control" name="description" id="description">${movie.description}</textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="img" class="col-sm-2 col-form-label">Poster picture</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" value=${movie.img} name="img" id="img">
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Save Changes</button>
              </div>
          </form>
      </section>
`;

let editMovieView = async (ctx) => {
    let movieId = ctx.params.movieId;

    getMovieById(movieId).then(movie => {
        return ctx.render(editMovieTemplate(movie));
    })
}

export default editMovieView;