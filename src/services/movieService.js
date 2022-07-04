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
    
}

export const editMovie = (e, movieId) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    let userId = localStorage.getItem('_id');

    fetch(`${baseUrl}/${movieId}`, {
        method: 'PUT',
        headers: {
            'X-Admin': '',
            'content-type': 'application/json',
        },
        body: JSON.stringify({ 
            _ownerId: userId,
            title: data.get('title'),
            description: data.get('description'),
            img: data.get('img'), 
        })
    })
    .then(res => res.json())
    .then(() => {
        page.redirect('/');
    });
}

export const deleteMovie = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`, {
        method: 'DELETE',
        headers: {
            'X-Admin': '',
            'content-type': 'application/json',
        }
    })
    .then(res => res.json());
}