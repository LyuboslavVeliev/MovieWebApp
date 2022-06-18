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
    .then(data => {
        console.log(data);
    });
}