
let movies;

fetch("data/moovies.json")
    .then((response) => response.json())
    .then((data) => {

    movies = data;
    // console.log(movies);
    afficherFilms(movies);

    })
    .catch((error) => {
        console.error(
            "une erreur s'est produite lors du chargement du fichier JSON :",
            error
        );
    })


// movies.forEach(function(movie) {
//     console.log(movie);
// });



function afficherFilms(movies){

    movies.forEach(movie => {
        let li = document.createElement('li');
        li.classList.add('list-movie-item');
        li.textContent = movie.Title + movie.Year + movie.Released + movie.Runtime + movie.Genre + movie.Director + movie.Writer + movie.Actors + movie.Plot + movie.Language + movie.Country + movie.Awards + movie.Poster + movie.Metascore + movie.imdbRating + movie.Type + movie.Images; 
        document.querySelector('.list-movie').appendChild(li);
    });
}

