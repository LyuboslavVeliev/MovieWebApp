import identity from './identity.js';

let baseUrl = 'http://localhost:3030';
let loginSection = document.querySelector('.login');
let loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password')
        })
    })
    .then(res => res.json())
    .then(responseData => {
        identity.saveAccessToken(responseData.accessToken);
    });
});

function showPage() {
    loginSection.classList.remove('hidden');
}

function hidePage() {
    loginSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};