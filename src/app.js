import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware, isAdminMiddleware } from './middlewares/authMiddleware.js';

import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import logoutView from './views/logoutView.js';
import homeView from './views/homeView.js';
import { movieDetailsView } from './views/movieDetailsView.js';
import addMovieView from './views/addMovieView.js';
import editMovieView from './views/editMovieView.js';

page(renderMiddleware);
page(authMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/movies', homeView);
page('/movies/add', isAdminMiddleware, addMovieView);
page('/movies/:movieId', movieDetailsView);
page('/movies/:movieId/edit', isAdminMiddleware, editMovieView)

page.start();