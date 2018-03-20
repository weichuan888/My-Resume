/* var perso = {
  name: "",
  live: 0,
  force: 0,
  xp: 0,

  decrire: function() {
    var description =
      this.name +
      " lui reste  " +
      this.live +
      " vie, et sa force est de " +
      this.force +
      " points de force.";
    return description;
  }
};

var joueur1 = Object.create(perso);
joueur1.name = "Gaetan";
joueur1.live = 100;
joueur1.force = 10;

var joueur2 = Object.create(perso);
joueur2.name = "Cedric";
joueur2.live = 200;
joueur2.force = 20;

//var joueur = new decrire();
console.log(joueur1.decrire());
console.log(joueur2.decrire());

// recoit un coup
joueur1.live = joueur1.live - 50;

//trouve une potion;
joueur2.force = joueur2.force + 100;

console.log(joueur1.decrire());
console.log(joueur2.decrire());
 */
var personnage = {
  initperso: function(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0;
  },

  attaquer: function(cible) {
    if (this.sante > 0) {
      var degats = this.force;
      console.log(
        this.nom +
          " attaque " +
          cible.nom +
          " et lui fait " +
          degats +
          " points de dégâts"
      );
      cible.sante = cible.sante - degats;

      if (cible.sante > 0) {
        console.log(cible.nom + " a encore " + cible.sante + " points de vie");
      } else {
        cible.sante = 0;
        console.log(cible.nom + " est mort");
      }
    } else {
      console.log(this.nom + " ne peut pas attaquer, il est mort...");
    }
  }
};

var joueur = Object.create(personnage);
joueur.initjoueur = function(nom, sante, force) {
  this.initperso(nom, sante, force);
  this.xp = 0;
};

joueur.decrire = function() {
  var description =
    this.nom +
    " a " +
    this.sante +
    " points de vie, " +
    this.force +
    " en force et  " +
    this.xp +
    " points d'expérience";
  return description;
};

joueur.combattre = function(adversaire) {
  this.attaquer(adversaire);
  if (adversaire.sante === 0) {
    console.log(
      this.nom +
        " a tué " +
        adversaire.nom +
        " et gagne " +
        adversaire.valeur +
        " points d'expérience"
    );
    this.xp += adversaire.valeur;
  }
};

var adversaire = Object.create(personnage);
adversaire.initAdvesaire = function(nom, sante, force, race, valeur) {
  this.initperso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};

var joueur1 = Object.create(joueur);
joueur1.initjoueur("Marcus", 10, 25);

var joueur2 = Object.create(joueur);
joueur2.initjoueur("Olaf", 15, 10);

console.log("Bienvenue dans ce jeu d'aventure ! voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(adversaire);
monstre.initAdvesaire("Dragono", 100, 10, "dragon", 48);

console.log(
  "Un monstre arrive! c'est un " + monstre.race + " nommé " + monstre.nom
);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
