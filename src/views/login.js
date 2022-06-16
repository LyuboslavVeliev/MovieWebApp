//import loginTemplate from '../templates/login.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

let baseUrl = 'http://localhost:3030';

let loginTemplate = () => html`
    <section class="login padding-30">
          <h3>Login</h3>
        <form @submit=${(e) => doLogin(e)} class="col g-3">
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

let rootElement = document.querySelector('#root');

function loginView() {
    return render(loginTemplate(), rootElement);
}

let doLogin = (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
        }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
}

export default loginView;