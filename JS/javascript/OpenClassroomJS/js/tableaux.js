var films = ["machin", "truc", "dessin"];

/*taille du tableau */
console.log(films.length);

/*acceder a un element d'un tableau*/
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

/*Parcourir un tableau */

for (var i = 0; i < films.length; i++) {
  console.log(films[i]);
}

/* ou */

films.forEach(function(film) {
  console.log(film);
});

/* ajouter un element dans un tableau*/
films.push("patate");
console.log(films[3]);

var Film = {
  init: function(titre, annee) {
    this.titre = titre;
    this.annee = annee;
  },

  decrire: function() {
    var description = this.titre + "(" + this.annee + ")";
    return description;
  }
};

var film1 = Object.create(Film);
film1.init("Le loup", 2014);

var film2 = Object.create(Film);
film2.init("le chien", 2018);

var films = [];
films.push(film1);
films.push(film2);

films.forEach(function(film) {
  console.log(film.decrire());
});
