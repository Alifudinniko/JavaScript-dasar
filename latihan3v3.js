
// Async Await

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
    console.log(movies);

});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=3a8df36d&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// Event bindin
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMoviesDetail(imdbid);
        updateUiDetail(movieDetail);
    }
});

function getMoviesDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=3a8df36d&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUiDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}









function showCards(m) {
    return `
    <div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#moviemodal" data-imdbid="${m.imdbID}">Show Detail</a>
        </div>
    </div>
    </div>
    `;
}

function showMovieDetail(m) {
    return `
    <div class="conntainer-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" alt="" class="">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h4>${m.Title}</h4>
                    </li>
                    <li class="list-group-item"><strong>Direktor </strong>: ${m.Director}  </li>
                    <li class="list-group-item"><strong>Aktor :</strong> ${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}