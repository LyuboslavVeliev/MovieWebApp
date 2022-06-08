import login from './pages/login.js';
import register from './pages/register.js';

let pages = {
    register: register,
    login: login
};

let navBarElement = document.querySelector('.navbar-nav');

navBarElement.addEventListener('click', (e) => {
    e.preventDefault();

    Object.values(pages).forEach(page => page.hidePage());

    let page = e.target.getAttribute('data-link');

    pages[page].showPage();
});