// Faire disparaitre les divs lorsque l'on passe la souris dessus
//
// Tip : utiliser le mouseenter ou mouseover

// var disaspear = document.querySelectorAll("hoverMe");
// for (var i = 0; i < disaspear.length; i++) {
//   var hoverMe = disaspear[i]
//   hoverMe.addEventListerner("mouseover", function() {
//     this.classList.add("red")
//     })
//     hoverMe.addEventListerner("mouseout", function () {
//     this.classList .add("red")
//     })
//   }
//

//
// var ciel = function () {
//   hoverMe.classList.add("bleu")
// }
//
//
// hoverMe.addEventListerner ("click", ciel);
//




// function mOver (hoverMe){
//
//   hoverMe.innerHTML = ""
// }
// function mOut (hoverMe) {
//   hoverMe.innerHTML = "Salut"
// }


var yo = document.querySelectorAll(".hoverMe");

for (var i = 0; i < yo.length; i++) {
  // console.log(yo[i])

  yo[i].addEventListener("mouseover", function () {
    this.classList.add("hidden");
  });
}






var reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
for (var i = 0; i < yo.length; i++) {
    yo[i].classList.remove("hidden");
    }
});


//   yo[i].addEventListener("mouseout", function() {
//     this.classList.remove("hidden")
//   });
// }



// exercice 3
//Faire de sorte que lorsque l'on bouge la souris dans la fenêtre, la position sois affiché dans les divs associés

var horizontale = document.querySelector("#axe-x");
var verticale = document.querySelector("#axe-y");
horizontale.addEventListener("mousemove", function(mousemove){

  horizontale.innerText = "axe x :" + mousemove.clientX;
});

verticale.addEventListener("mousemove", function(mousemove){
  verticale.innerText= "axe y : " + mousemove.clientY;
})



/* on ajoute une coordonné avec l'écriture mousemove.clientX est une propriété
qui renvoie les coordonnées de l'axe de x
idem pour mousemove.clientY qui renvoie les coordonnées de l'axe de y.

innertHtml => lire sur le Html
innerText => lire les coordonnées dans le mot précédent.
A revoir leur definitions !!!
*/
