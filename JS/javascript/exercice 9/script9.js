
// crée une fonction qui retourne un numéro aléatoire arondi
// entre la variable minimale et la variable maximale

// function aleatoire () {
//   var nb = prompt ("Jeu: le juste prix");
//   var min = 20;
//   var max = 80;
//   if ((nb <= max) && (nb >=s min)) {
//     console.log ("C'est correct!");
//   } else {
//         console.log("C'est incorrect");
//       }
//
// }
//
// aleatoire()


// function ale (min, max) {
//   var min = 20;
//   var max = 80;
//   console.log(Math.floor((max-min)*Math.random())+min)
// }
// ale()

// crée une fonction
// qui prends un argument pour tester si le numéro qu on a entré est le bon
// la fonction retourne un de ces 3 messages :
// C'est plus,
// C'est moins,
// C'est juste tu as trouvé en X coups

function valeur (min, max) {
  var nb = prompt ("Jeu: le juste prix");
  var min = 20;
  var max = 80;
  var chiffre = (Math.floor((max-min)*Math.random())+min);
  var essai = 0;



while (chiffre!= nb) {

  if (chiffre > nb) {
    console.log("C'est plus");
    nb = prompt("c'est plus");
    essai++;
  } if (chiffre < nb){
    console.log("c'est moins");
    nb = prompt ("c'est moins");
    essai++;
  }

}

if (chiffre == nb) {
  console.log("gagné!");
  console.log ("C'est juste tu as trouvé en " + essai + " coups ");
}
}
valeur ()
