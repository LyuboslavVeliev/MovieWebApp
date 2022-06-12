import login from './pages/login.js';
import register from './pages/register.js';
import identity from './pages/identity.js';
import { logout } from './pages/logout.js';
import home from './pages/home.js'

let pages = {
    register: register,
    login: login,
    home: home,
};

let navBarElement = document.querySelector('.navbar-nav');

identity.adjustNavBarIfAuthorized();

navBarElement.addEventListener('click', (e) => {
    e.preventDefault();

    identity.adjustNavBarIfAuthorized();

    let page = e.target.getAttribute('data-link');
    if (page == 'logout') {
        logout();
        identity.adjustNavBarAfterLogout();
    } else {
        hidePages();

        pages[page].showPage();
    }
});

// let searchForm = document.querySelector('#search-form');

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let data = new FormData(e.currentTarget);
//     let searchedTitle = data.get('movie-title');

//     let moviesElements = document.querySelectorAll('.card');

//     let searchedMovies = [];

//     for (const moviesElement of moviesElements) {
//         let movieTitle = moviesElement.querySelector('.card-title').textContent;

//         if (movieTitle.contains(searchedTitle)) {
            
//         }
//     }
// });

function hidePages() {
    Object.values(pages).forEach(page => page.hidePage());
}

