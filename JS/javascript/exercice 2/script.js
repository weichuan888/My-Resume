/* EXERCICE 2A : les langues */


var langue = prompt("Quel langue sais-tu parler?");
var msg = "";


if (langue == "fr") {
 msg = "Bonjour tout le monde"
}
  else if (langue == "es") {
    msg = "Hola, Mundo"
}
  else if (langue == "en") {
    msg = "Hello world"
}

console.log(msg)



/* EXERCICE 2B: Affichage des scores*/
var score = prompt("Quel est ton score sur Becode?");
var result = "";

if (score >= 90) {
  result = "rang A"
}
if (score < 90) {
  result = "rang B"
}
if (score <= 50) {
  result = "rang C"
}
console.log (result)




/* EXERCICE 2C : Mettre au pluriel*/
var singulier = "pomme";
var nbre_dispo = 4;
var result = ""


if ( nbre_dispo > 1 ) {
  var pluriel = singulier + 's';
  result = pluriel;
}
else {
  result = singulier
}
console.log (" Je possède 4 " + result)


/* On peut introduire des var dans les if!!!
ici, si j'ai le nbre_dispo = 4 , alors pomme s'écrira avec un s
si j'ai le nbre_dispo = 0 , alors pomme s'écrira sans s
attention a bien lire!!!!
*/
