// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("data/moovies.json");
const movies = await reponse.json();

console.log(moovies);


const imageElement = document.createElement("img");
imageElement.src = moovies.image;
const nomElement = document.createElement("h2");
nomElement.innerText = moovies.nom;
const prixElement = document.createElement("p");

const categorieElement = document.createElement("p");
categorieElement.innerText = moovies.categorie;

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

