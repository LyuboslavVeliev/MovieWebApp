// import login from '../pages/login.js';
// import register from '../pages/register.js';
// import identity from '../pages/identity.js';
// import { logout } from '../pages/logout.js';
// import home from '../pages/home.js';


// let pages = {
//     register: register,
//     login: login,
//     home: home,
// };

// let navBarElement = document.querySelector('.navbar-nav');

// identity.adjustNavBarIfAuthorized();

// navBarElement.addEventListener('click', (e) => {
//     e.preventDefault();

//     identity.adjustNavBarIfAuthorized();

//     let page = e.target.getAttribute('data-link');
//     if (page == 'logout') {
//         logout();
//         identity.adjustNavBarAfterLogout();
//     } else {
//         hidePages();

//         pages[page].showPage();
//     }
// });

// function hidePages() {
//     Object.values(pages).forEach(page => page.hidePage());
// }


import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './middlewares/renderMiddleware.js';

import loginView from './views/loginView.js';
import registerView from './views/registerView.js';

page(renderMiddleware);

page('/login', loginView);
page('/register', registerView);

page.start();