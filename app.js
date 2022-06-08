import register from './pages/register.js';

let pages = {
    register: register,
};

let navBarElement = document.querySelector('.navbar-nav');

navBarElement.addEventListener('click', (e) => {
    e.preventDefault()

    let page = e.target.getAttribute('data-link');
    
    pages[page].showPage();
});