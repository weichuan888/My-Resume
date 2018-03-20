

/* EXERCICE 7A: Minimum et Maximun*/
/*
console.log(Math.min(7, 5, -12, 6, 32, 18, 14, -2));

console.log(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));
*/

/* Pour les 2 lignes ci dessus, c'est pour chercher
les valeur max et min entre les ()
*/



/*Autre méthode pour chercher les math mix, et math max*/

/*
let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(min + max);
*/

/*Les 3 lignes ci dessus => démontrent une autre maniere pour
obtenir les math min et math max */


function addition () {
  let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

  let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
  console.log(min + max);
}

addition();

/* Ici, on crée une fonction addition () {
en encadrant les variables dont je veux appliquer afin de les additionner
ensemble.}

S'ils sont à l'extérieur de la fonction, on devra crée d'autres manieres pour
les appeller, sinon ils ne sont pas tenus compte dans la fonction.


apres la fonction additioner () {}
on rajoute une ligne
additioner ();
Pour appeller la fonction, et qu'il affiche dans la console.


Note: On peut ajouter un argument dans la valeur et l'ajouter
de la meme maniere au console.log

ex
function addition (param) {
  let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

  let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
  console.log(min + max + param);
}

addition(10);

=> le résultat dans la console sera de 52 => -12+54+10
*/

/* EXERCICE 7B : Aleatoire 1 */
var floatBateau = 10.4;
var couleBateau = Math.ceil (floatBateau);
var voleBateau = Math.round (floatBateau);
console.log (couleBateau);
console.log (voleBateau);






/* EXERCICE 7C : Aleatoire 2 */

function chi (min, max) {
    var min = 50;
    var max = 100;
console.log (Math.floor((max-min)*Math.random())+ min)
}
chi ()

/*
on crée une fonction chi (min, max)
pour intégrer 2 variables (50, 100)
Math.floor est utilisé pour renvoyer une valeur décimale inférieur , cad
53.4 => 53
68.2 => 68
...
on fait donc Math.floor (100-50)=> 50
On multiplie ensuite par Math.random qui ne donne un valeur entre 0 et 1
=> on multplie math.floor et math.random =>

ex : 0.1 * 53 = 5,3
    0.2 * 68 = 13.6
...

comme le math.floor englobe tout, il renvoie également vers un nombre entier inférieur,
cad si on a une valeur décimal, on lui donne un nombre entier inférieur a la décimal
cad

ex : 5.3 => 5
    13.6 => 13
...
A cela, on ajoute la valeur min, ici qui est de 50.
ex : 5 + 50 = 55
    13 + 50 = 63
*/



var aleatoire = Math.random ();
console.log(aleatoire);

/* Math.random est utilisé pour donné un chiffre automatique compris entre 0 et 1,
il ya donc des décimales et plus qui apparaissent
le 1 est exclus!!*/



var nb = Math.floor(Math.random() * 11);
console.log (nb);



/*
on fait math.random * 11
car logiquement math.random est un chiffre entre 0 et 1 (1 exclus)
ex: 0.1 * 11= 1.1
0.2 * 11 = 2.2
....
et Comme on ajoute un math.floor => il arrondi le chiffre vers le bas !
1.1 => 1
2.2 => 2
...
*/




/* EXERCICE 7D : Aleatoire 3 */


 var tableau = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
 console.log(tableau.length)

 var nombre = (Math.floor(Math.random()* tableau.length));
 console.log (tableau[nombre])


/*
Dans ce cas-ci, on crée un tableau contenant des noms
on lit dans la console, le nombre de caracteres présent avec tableau.length

on ajoute une var nombre
Math.random donne un chiffre entre 0 et 1 , sera multiplié par tableau.length
ici, on a 10 noms dans le tableau.
ex : 0.4212 * 10 = 4.212
    0. 5121 * 10 = 5.121
    ...
Math.floor qui englobe tout le calcul, va porter le chiffre inférieur, pour avoir
un nombre entier!

ex : 4.212 => 4
    5.121 => 5

Ensuite on lit dans la console.log (tableau[nombre])
Si  on ne met que nombre dans la console, il ne lira qu'un chiffre alatoire...
Pour qu'il lit le nom, il faut ajouter le mot tableau et mettre entre crochet nombre
afin qu'il puisse lire l'un des noms dans le tableau en fonction du chiffre aleatoire donné
*/
