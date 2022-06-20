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
        saveUser(user);
        page.redirect('/');
    });
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
        .then(res => {
            localStorage.clear();
        });
    }
}

function saveUser(user) {
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
    localStorage.setItem('_id', user._id);
}

export const isAuthenticated = () => {
    let accessToken = localStorage.getItem('accessToken');

    return Boolean(accessToken);
}