
// Fetch - - - - VANILA JAVASCRIPT

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=3a8df36d&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
        });


    //ketika tombol detail di-klik
    const modalDetailButton = document.querySelectorAll('.modal-detail-button');
    modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function () {
            const dataid = this.dataset.imdbid;
            console.log(dataid);
            fetch('http://www.omdbapi.com/?apikey=3a8df36d&i=' + dataid)
                .then(response => response.json())
                .then(m => {
                    const moviDetail = showCardsid(m);
                    const modalBody = document.querySelector('.modal-body');
                    modalBody.innerHTML = moviDetail;
                });
        });
    });

});

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

function showCardsid(m) {
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