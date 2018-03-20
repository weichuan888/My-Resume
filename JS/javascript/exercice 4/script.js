alert ("hello");

/* EXERCICE 4A : Pair et Impair

function Odd(value) {
    return (value & 1)==1;
}

for(var i=1;i<=20;i++) {
    console.log (i+" est "+(Odd(i)?"Impaire":"Pair")+"<BR>");
}

*/

for (var i = 0; i < 21; i++)
  if (i%2 == 0) {

    console.log (i + " est pair ")
  }
  else
    console.log(i + " est impair ")


/* i % 2 == 0
% modulo
 i est divisible par 2, et donne une égalité a 0

*/

/* EXERCICE 4B : Multiplication Table */

  for (var i = 0; i <11; i++) {
  var result = (i * 9);
    console.log (i + " * 9 = "  + result)
  }





/* EXERCICE 4C : Assigner des grades */

for (var i =0; i <100; i++){

if (i > 90){
  console.log (" Pour " + i + " points vous avez le grade A ")
}
else if (i > 80) {
  console.log (" Pour " + i + " points vous avez le grade B ")
}
else if (i > 70) {
  console.log(" Pour " + i + " points vous avez le grade C ")
}
else if (i >= 65){
  console.log (" Pour " + i + " points vous avez le grade D ")
}
else if (i < 65) {
  console.log (" Pour " + i + " points vous avez le grade F ")
}
}


*/

/* EXERCICE 4D : Pyramide */



/* Document write, les étoiles sur la gauche aligné

document.write(); //write a center tag to make sure the pyramid displays correctly(try it without this step to see what happens)
for(var i = 0; i <= 10; i++) //a loop, this counts from 0 to 10 (how many rows of stars)
{
for(var x = 0; x <= i; x++)// a loop, counting from 0 to whatever value i is currently on
{
document.write("*");//write a * character
}
document.write("<br/>"); //write a br tag, meaning new line, after every star in the row has been created
}
document.write(); //close the center tag, opened at the beginning

*/

/* Document write, les étoiles sont centré au milieu!!

document.write("<center>"); //write a center tag to make sure the pyramid displays correctly(try it without this step to see what happens)
for(var i = 0; i <= 10; i++) //a loop, this counts from 0 to 10 (how many rows of stars)
{
for(var x = 0; x <= i; x++)// a loop, counting from 0 to whatever value i is currently on
{
document.write("*");//write a * character
}
document.write("<br/>"); //write a br tag, meaning new line, after every star in the row has been created
}
document.write("</center>"); //close the center tag, opened at the beginning

*/


/* méthode trouver sur google...
function pyramid (height) {

for (var i = 1; i <= height; i++) {
var row = '';

for (var j = 1; j <= i; j++) {
  row = '*';
}

console.log(row);
}
}

pyramid(5);

*/


/* Methode simplifié */
var msg ="";
for (var i=0; i <5 ; i++)
{
msg = msg+"*";
console.log(msg);
}
