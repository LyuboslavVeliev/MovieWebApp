import identity from './identity.js';

let baseUrl = 'http://localhost:3030';
let registerSection = document.querySelector('.register');
let registerForm = registerSection.querySelector('form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`${baseUrl}/users/register`, {
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
    registerSection.classList.remove('hidden');
}

function hidePage() {
    registerSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};