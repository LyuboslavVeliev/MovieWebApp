let baseUrl = 'http://localhost:3030';
let homeSection = document.querySelector('.home');
let movieListElement = document.querySelector('#movie-list');

fetch(`${baseUrl}/data/movies`)
    .then(res => res.json())
    .then(moviesData => {
        renderMovies(moviesData);
    });

function showPage() {
    homeSection.classList.remove('hidden');
}

function hidePage() {
    homeSection.classList.add('hidden');
}

function renderMovies(movies) {
    for (const movie of movies) {
        let movieCard = '<div class="card" style="width: 18rem;"><img width="300px" height="400px" src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';

        var stringToHTML = function (str) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, 'text/html');
            return doc.body;
        };

        let movieCardElement = document.createElement('li');
        movieCardElement.innerHTML = movieCard;

        movieListElement.appendChild(movieCardElement);

        console.log(movieListElement);

        let titleElement = movieCardElement.querySelector('.card-title');
        titleElement.textContent = movie.title;

        let descriptionElement = movieCardElement.querySelector('.card-text');
        descriptionElement.textContent = movie.description;

        let imageElement = movieCardElement.querySelector('.card-img-top');
        imageElement.src = movie.img;
    }
}

export default {
    showPage,
    hidePage
};