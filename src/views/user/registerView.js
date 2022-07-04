import { html } from '../../../node_modules/lit-html/lit-html.js';
import { register } from '../../services/userService.js';

let registerTemplate = () => html`
    <section class="register padding-30">
          <h3>Register</h3>
        <form  @submit=${(e) => register(e)} class="col g-3">
            <div class="mb-3 row">
                <label for="emailR" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="email" id="email">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="passwordR" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" name="password" id="password">
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Register</button>
              </div>
          </form>
      </section>
`;

let registerView = (ctx) => {
    return ctx.render(registerTemplate());
}

export default registerView;