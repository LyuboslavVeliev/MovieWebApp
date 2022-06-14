import { html } from '../../node_modules/lit-html/lit-html.js'

let loginTemplate = () => html`
    <section class="login padding-30 hidden">
          <h3>Login</h3>
        <form class="col g-3">
            <div class="mb-3 row">
                <label for="emailL" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="email" id="email">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="passwordL" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" name="password" id="password">
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
              </div>
          </form>
      </section>
`;

export default loginTemplate;