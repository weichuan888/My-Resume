

//  EXERCICE 11 : avec les fonctions des tableaux

// charger le fichier "data.json" tip : xmlHttpRequest




var ourRequest = new XMLHttpRequest();
ourRequest.open ("GET", "https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json");
ourRequest.onload = function () {
  var ourData= data.json.parse(ourRequest.responseText);
  console.log(ourData[0]);
}
ourRequest.send();


// ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()

//var score = (Math.floor()*Math.random());
