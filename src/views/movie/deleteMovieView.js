import { deleteMovie } from '../../services/movieService.js';

function deleteMovieView(ctx) {
    let movieId = ctx.params.movieId;

    deleteMovie(movieId)
        .then(() => {
            ctx.page.redirect('/');
        })
}

export default deleteMovieView;