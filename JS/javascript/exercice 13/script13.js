/*Crée (en HTML) une DIV avec l'id "character"
 Faire changer de couleur de fond a cette DIVà chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier Tip : utiliser le switch
*/
var character = document.getElementById("character");
console.log(character);
var backgroundColor;
window.addEventListener("keypress", function (event) {

switch (event.key) {
  case '0':
  character.style.backgroundColor = "red";
    break;
  case '1':
  character.style.backgroundColor = "blue";
    break;
  case '2':
  character.style.backgroundColor = "gold";
    break;
  case '3':
  character.style.backgroundColor = "aqua";
    break;
  case '4':
  character.style.backgroundColor = "black";
    break;
  case '5':
  character.style.backgroundColor = "grey";
    break;
  case '6':
  character.style.backgroundColor = "green";
    break;
  case '7':
  character.style.backgroundColor = "yellow";
    break;
  case '8':
  character.style.backgroundColor = "purple";
    break;
  case '9':
  character.style.backgroundColor = "darkred";
    break;
}
});


//Crée (en HTML) 4 divs avec les id suivantes : "up, down, left, right"
//crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
//Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
//Pour chaque div retier la classe 'highlight' quand on relâche la touche

var up = document.getElementById("up");
var down = document.getElementById("down");
var right = document.getElementById("right");
var left = document.getElementById("left");

window.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "38" :
    up.classList.add("highlight");
      break;
    case "40" :
    down.classList.add("highlight");
      break;
    case "39" :
    right.classList.add("highlight");
      break;
    case "37" :
    left.classList.add("highlight");
      break;
  }
})
window.addEventListener("keyup", function(event) {
  switch (event.key) {
    case "38" :
    up.classList.remove("highlight");
      break;
    case "40" :
    down.classList.remove("highlight");
      break;
    case "39" :
    right.classList.remove("highlight");
      break;
    case "37" :
    left.classList.remove("highlight");
      break;
}})
/*Ca ne marche pas ???? x( x( x( )))*/
