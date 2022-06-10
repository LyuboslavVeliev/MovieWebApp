import login from './pages/login.js';
import register from './pages/register.js';
import identity from './pages/identity.js';

let pages = {
    register: register,
    login: login
};

let navBarElement = document.querySelector('.navbar-nav');

adjustNavBarIfAuthorized();

navBarElement.addEventListener('click', (e) => {
    e.preventDefault();

    hidePages();

    adjustNavBarIfAuthorized();

    let page = e.target.getAttribute('data-link');

    pages[page].showPage();
});

function hidePages() {
    Object.values(pages).forEach(page => page.hidePage());
}

function adjustNavBarIfAuthorized() {
    if (identity.isAuthorized()) {
        let navBarLinks = document.querySelectorAll('.nav-link');

        for (const link of navBarLinks) {
            if (link.getAttribute('data-link') == 'login' || link.getAttribute('data-link') == 'register') {
                link.classList.add('hidden');
            } else if(link.getAttribute('data-link') == 'logout') {
                link.classList.remove('hidden');
            }
        }
    }
}