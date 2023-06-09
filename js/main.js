let movies;

// Récupération des pièces depuis le fichier JSON

fetch("data/moovies.json")
    .then((response) => response.json)
    .then((data) => {

    movies = data;
    console.log(movies);
    })


// for (var i = 0; i < heroes.length; i++) {    
//      myH2 = document.createElement('h2');
//      myArticle = document.createElement('article');
//      myPara1 = document.createElement('img');
//      myPara2 = document.createElement('p');
//    }
 

// const imageElement = document.createElement("img");
// imageElement.src = moovies.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = moovies.nom;
// const prixElement = document.createElement("p");

// const categorieElement = document.createElement("p");
// categorieElement.innerText = moovies.categorie;

// const sectionFiches = document.querySelector(".Movies");
// Movies.appendChild(imageElement);
// Movies.appendChild(nomElement);
// Movies.appendChild(prixElement);
// Movies.appendChild(categorieElement);

