// // exercice condition
// const t = 5;
//
// function mathMax(a, b) {
//   let max = 0;
//   if (a>b) {
//     max = a;
//   }
//   else {
//     max = b;
//   }
//   return max;
// }
//
//
// const c = 2000
// function salaire(c) {
//     if (c>1200) {
//       console.log(1200+((c/100)*15)) }
//     else {
//       console.log ("pas de retenu")}}
// salaire()
//
//
// const brut = 2000
// const net = 1200
// function Salai(brut, net) {
//   if ()

// var a=45;
// var c=78;
//
// //cree une fonction qui va multiplier a et c qui crée un resultat qui va donner x
//
// function(){
//   var a=0;
// }
//
//
// console.log(x)










/*


        lettre++;
        mot.splice(i,1,trouver);


else {

    if ( mot.indexOf(trouver) == -1 ) {
        console.log("Introuvable !");
    }
    else {
        console.log("Trouvé !");



if (compteurVictoire ==  mot.length) {
    console.log("win !");
}
else  {
    guessLetter();
}
}

guessLetter()
*/

// alert("Le jeu du pendu, enjoy!");
//
// var tableau = ["B", "O", "N", "J", "O", "U", "R"];
// var tableauVide = ["","","","","","",""];
// var fin = tableau.length; /* => 7*/
// var cpt = 0;
//
// /* Cree une fonction guessLetter */
// while( fin > 0){
//
//     var input = prompt ("Choisis ta lettre");
//     input=input.toUppercase();
//
//     if(tableau.includes(input)){
// /* Iterer a travers les lettres */
//     for (var i=0; i<tableau.length; i++) {
// /* Voir si la lettre deviné se trouve dans le mot */
//         if (tableau[i] == input) {
//           var index=tableau.indexOf(input);
//           tableauVide.slice(index, 1, input);
//           tableau.slice(index, 1, "*");
//           fin--;
//           console.log(tableauVide)
//           }
//       }
//     }
//
//       else {
//         cpt++;
//         console.log("Erreur, recommence")
//
//       }
//
// }
//
// console.log("Bravo, vous avez gagné!");
// console.log(cpt + " erreur(s)!");


// exercice 1
//
// var nb_enfants = 4;
// var nom_femme = "Li";
// var pays = "France";
// var metier = "pompier";
//
// console.log(" Vous serez " + metier + " et habiterez en " + pays + " et marié à " + nom_femme + " avec " + nb_enfants + " enfants.");
//

// var annee_courante = 2017;
// var annee_naissance = 1993;
//
// console.log(annee_courante - annee_naissance);
//
//
// var age = 24;
// var age_max = 100;
// var denree_alimentaire = "bananes";
// var par_jour = 2;
//
// var vie = par_jour * 365;
// var age_restant = age_max - age;
//
// console.log("Il vous reste " + vie + " de " + denree_alimentaire + " avant d'atteindre l'age de " + age_max + " ans. ");

//
// var etape1 = 1+2;
// var etape2= etape1*3;
// var etape3 = 4/2;
// var etape4 = etape2 + etape3;
//
// console.log("etape 1 : " + etape1 + "* 3 + 4/2");
// console.log("etape 2 : " + etape2 + " + 4/2" );
// console.log("etape 3 : " + etape2 + " + " + etape3);
// console.log("etape 4 : " + etape4);

// Exerice 2
//
// var langue1 = "fr",
//  langue2 = "es",
//  langue3 = "en";
//
// var msg = prompt ("Quel langue parles-tu?");
// if (msg == "fr") {
//   console.log("Bonjour tout le monde");
// }
// if (msg == "es") {
//   console.log("Hola, Mundo");
// }
// if (msg == "en") {
//   console.log("Hello World");
// }

// var score = prompt ("ton score ?");
// var result = "";
// if (score >=90) {
// result = "rang A"
// }
// if (score < 90) {
// result = "rang B"
// }
// if (score <=50) {
// result = "Rang C"
// }
// console.log(result);



// var singulier = "chocolat";
// var nombre = 50;
// var result = "";
// if (nombre>1) {
//   var result = singulier + "s";
// }
// else {
//   var result = singulier;
// }
// console.log("Je possède 4 " + result  );

var add = function (a, b) {
  return  a + b
}
