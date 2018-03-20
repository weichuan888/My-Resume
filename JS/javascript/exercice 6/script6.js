alert ("Le jeu du pendu");
var mot = ["R", "A", "V", "I", "O", "L","I"];
var mot_afficher = ["","","","","","",""];
var fin = mot.length;
var cpt= 0;


function guessLetter(){
  var trouver = prompt ("Choisis une lettre");
  trouver= trouver.toUpperCase(); /*definir que la lettre quelque soit minuscule ou majuscule, elle reste la meme */
  console.log (trouver);

  if (trouver.length !=1) {/* verifier celui qui tape la lettre a bien écris dans la case vide*/
      console.log ("Veuillez écrire une lettre");
  }
  else {
        if (mot.indexOf(trouver) == -1)
          { /* si la lettre ne correspond a aucune lettre du mot => incorrect*/
          console.log("Incorrect");
        } else
          {
            console.log ("Correct");

            for (var i=0;i<mot.length;i++) {
              if (trouver == mot[i]) {
                  mot_afficher[i] = trouver;
                  cpt++;
                  console.log ("Bien joué, tu as trouvé une lettre!");
                  mot_afficher.slice(i,1,trouver); /*pour renvoyer, voir couper le mot si il ya 2 lettre identiques*/
                  console.log(mot_afficher);
              }
            }
          }
        }
  if (cpt == mot.length) {
    console.log ("gagné!")
  } else {
    guessLetter();
  }
}
guessLetter();
