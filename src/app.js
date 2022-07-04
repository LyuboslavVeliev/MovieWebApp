import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware, isAdminMiddleware } from './middlewares/authMiddleware.js';

import loginView from './views/user/loginView.js';
import registerView from './views/user/registerView.js';
import logoutView from './views/user/logoutView.js';
import homeView from './views/homeView.js';
import { movieDetailsView } from './views/movie/movieDetailsView.js';
import addMovieView from './views/movie/addMovieView.js';
import editMovieView from './views/movie/editMovieView.js';
import deleteMovieView from './views/movie/deleteMovieView.js';

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
page('/movies/:movieId/delete', isAdminMiddleware, deleteMovieView)

page.start();