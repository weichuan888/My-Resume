/* EXERCICE 5A : Addition (Tableaux)*/


var table = [1, 2, 3, 4, 5, 6, 7, 8, 9];   /* je dis que ma variable table va comprendre tout ces chiffes */
var somme = 0;  /* je veux crée une somme, je crée donc une variable somme! */

for (var i = 0; i<table.length; i++) {


  /* je crée une boucle ici, et on ajoute table.length pour démontrer qu'il un nombre x
  de caracteres dans le table, ici dans ce cas ci, il y'en a 8 caracteres, car
  on commence tj par 0 */
  console.log(table[i]);


/*
je crée une console.log pour faire lire à ma table tout ce qu'il ya dans le i ,
ma console lira donc les 8 caracteres. */
  somme = table[i] + somme;


/* je crée ici, une somme afin que les nombres s'additionne.
ex:
somme = table [0] + somme => 1 + 0 = 1
somme = table [1] + somme => 2 + 1 = 3
somme = table [2] + somme => 3 + 3 = 6
somme = table [3] + somme => 4 + 6 = 10
somme = table [4] + somme => 5 + 10 = 15
somme = table [5] + somme => 6 + 15 = 21
somme = table [6] + somme => 7 + 21 = 28
somme = table [7] + somme => 8 + 28 = 36
somme = table [8] + somme => 9 + 36 = 45
Et il continue jusqu' à atteindre au lenght, cad à la taille max du table.
Dans ce cas ci, c'est 8 caracteres */


}
console.log (somme)

/* il ne suffit plus qu'a lire la somme dans la console
afin qu'il indique la somme finale qui est de 45 */



/* EXERCICE 5B : Vos Meilleurs Choix (tableaux)*/
var acteur = ["Stalone", "Cruiz", "Chan"];

console.log ("Le numero 1 est " + acteur[0]);
console.log ("Le numéro 2 est " + acteur[1]);
console.log ("Le numéro 3 est " + acteur [2]);



/* Tentative Bonus
if acteur [0] {
  console.log(" Le premier est " acteur[0] )
}
  else if acteur [1]
  {
    console.log (" Le second est " + acteur [1])
  }
  else if acteur [2]
{
  console.log ("Le troisième est " + acteur [2])
}

*/

/* EXERCICE 5 C : clone (tableaux) */




  var perso = ["Mario", "Luigi", "Peach"];
  var nintendo = perso.slice(0);
  nintendo.push ('Browser');
  console.log (perso);
  console.log (nintendo);



/*
Je présente mon tableau de perso
ensuite je presente mon deuxieme tableau
nintendo= perso.slice(0);
Signifie que le slice ne clone pas,
SLICE => c'est uné méthode de copie !!!! pas un clone
le 0 dans le slice signifie que c'est à partir de ce caractere
qu'il va coupé

nintendo.push !!!!! Attention, c'est ici dans le
deuxieme tableau que j'apporte un nouvel élément 'Browser'



nintendo.push
en ajoutant .push => c'est pour ajouter a notre tableau
un nouveau perso;
et on fait console.log pour lire le tableau.

 */
