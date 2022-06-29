import { isAdmin } from "./userService.js";
import page from '../../node_modules/page/page.mjs';

let baseUrl = 'http://localhost:3030/data/movies';

export const getAllMovies = () => {
    return fetch(baseUrl)
            .then(res => res.json());
}

export const getMovieById = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`)
            .then(res => res.json());
}

export const addMovie = (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    let accessToken = localStorage.getItem('accessToken');
    let userId = localStorage.getItem('_id');

    if (isAdmin) {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify({
                _ownerId: userId,
                title: data.get('title'),
                description: data.get('description'),
                img: data.get('img'),
            }),
        })
        .then(res => res.json())
        .then(() => {
            page.redirect('/');
        });
    } else {
        console.log('Access Denied');
    }
}