import { html } from '../../node_modules/lit-html/lit-html.js';
import { addMovie } from '../services/movieService.js';

let addMovieTemplate = () => html`
    <section class="padding-30">
          <h3>Add Movie</h3>
        <form  @submit=${(e) => addMovie(e)} class="col g-3">
            <div class="mb-3 row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="title" id="title">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea class="form-control" name="description" id="description"></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="img" class="col-sm-2 col-form-label">Poster picture</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="img" id="img">
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Add Movie</button>
              </div>
          </form>
      </section>
`;

let addMovieView = async (ctx) => {
  return ctx.render(addMovieTemplate());
}

export default addMovieView;