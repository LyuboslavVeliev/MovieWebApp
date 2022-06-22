import { html } from '../../node_modules/lit-html/lit-html.js';

export const navBarTemplate = (ctx) => html`
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" id="site-title" href="/">MovieWebApp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" tabindex="1" data-link="home" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-link="watchlist" tabindex="1" href="#">Watchlist</a>
            </li>
            ${  ctx.isAuthenticated 
                ? 
                html`
                <li class="nav-item">
                  <a class="nav-link" data-link="watchlist" tabindex="1" href="#">My Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-link="logout" tabindex="1" href="/logout">Logout</a>
                </li>`
                :
                html`
                <li class="nav-item">
                    <a class="nav-link" data-link="login" tabindex="1" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-link="register" tabindex="1" href="/register">Register</a>
                </li>`
            }
          </ul>
          <form class="d-flex" role="search" id="search-form">
            <input class="form-control me-2" type="search" name="movie-title" id="search-input" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" id="search-button" tabindex="1" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
`;