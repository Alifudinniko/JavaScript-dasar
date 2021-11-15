$('.search-button').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=3a8df36d&s=' + $('.input-keywoard').val(),
        success: result => {
            console.log(result);

            const movies = result.Search;
            // console.log(movies);

            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            //Jquery tolong ccarikan saya element movie lalu timpa pakai data cards
            $('.movie-container').html(cards);


            //Ketika Tombol detail di klik 
            $('.modal-detail-button').on('click', function () {
                // console.log($(this).data('imdbid'));

                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=3a8df36d&i=' + $(this).data('imdbid'),
                    success: m => {
                        const moviDetail = showCardsid(m);
                        $('.modal-body').html(moviDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
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