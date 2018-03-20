// function clic() {
//   console.log("ca marche!");
// }
//
// var test = document.getElementById("button");
// test.addEventListener("click", clic);

document.getElementById('button').addEventListener("click", function(e) {
  console.log("Evenement : " + e.type +
  ", texte de la cible " + e.target.textContent);
});
