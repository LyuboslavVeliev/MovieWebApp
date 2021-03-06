import page from '../../node_modules/page/page.mjs';

let baseUrl = 'http://localhost:3030';

export function login(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
        }),
    })
    .then(res => res.json())
    .then(user => {
        if (user.accessToken) {
            saveUser(user);
            page.redirect('/');
        } else {
            console.log('Login has failed');
        }
    })
    .catch(err => console.log(err));
}

export function register(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password'),
            role: 'User',
        }),
    })
    .then(res => res.json())
    .then(user => {
        saveUser(user);
        page.redirect('/');
    });
}

export function logout() {
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        return fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })
        .then(() => {
            localStorage.clear();
        });
    }
}

function saveUser(user) {
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
    localStorage.setItem('_id', user._id);
    localStorage.setItem('role', user.role);
}

export const isAuthenticated = () => {
    let accessToken = localStorage.getItem('accessToken');

    return Boolean(accessToken);
}

export const isAdmin = () => {
    let userRole = localStorage.getItem('role');

    if (userRole == 'Admin') {
        return true;
    } else {
        return false;
    }
}