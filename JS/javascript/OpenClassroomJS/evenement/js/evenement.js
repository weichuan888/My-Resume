function clic() {
  console.log("clic!");
}
var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function(e) {
  console.log(
    "Evènement : " + e.type + ", texte de la cible : " + e.target.textContent
  );
});

document.addEventListener("keypress", function(e) {
  console.log(
    "vous avez appuyez sur la touche" + String.fromCharcode(e.charCode)
  );
});
