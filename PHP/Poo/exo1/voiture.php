<?php
class Voiture {
  private $marque;
  public $poids;
  private $immatriculation;
  public $kilometrage;
  private $mise_en_circulation;
  private $modele;
  public $couleur;
  public $kilometre;
  public $kiloms;


public function __construct($marque, $poids, $immatriculation, $kilometrage, $mise_en_circulation, $kilometre) {
  $this->reserved($marque);
  $this->utilitaire($poids);
  $this->plaque($immatriculation);
  $this->parcouru($kilometrage);
  $this->annee_circulation($mise_en_circulation);
  $this->drive($kilometre);

}
public function reserved($marque) {
  if ($marque == "Audi") {
    echo "cette voiture est reservé";
    echo "<hr/>";
  } else {
    echo "cette voiture est disponible";
    echo "<hr/>";
  }
}

public function  utilitaire($poids) {
  if ($poids > 3.5) {
    echo "cette voiture est un utilitaire, car elle pèse " .$poids. " tonnes.";
    echo "<hr/>";
  } else {
    echo "cette voiture est une commerciale, car elle pèse " .$poids. " tonnes.";
    echo "<hr/>";
  }
}

public function plaque($immatriculation) {
    if (stristr($immatriculation, "BE") == True) {
      echo "La voiture vient de Belgique";
      echo "<hr/>";
    } else if (stristr($immatriculation, "FR") == True) {
      echo "La voiture vient de France";
      echo "<hr/>";
    } else if (stristr($immatriculation, "DE") == True) {
      echo "La voiture vient d'Allemagne";
      echo "<hr/>";
    } else {
      echo "La voiture est introuvable";
    }
}

public function parcouru($kilometrage) {
  if ($kilometrage < 100000) {
    echo "La voiture a peu servi, elle n'a roulé que " .$kilometrage. " KM.";
    echo "<hr/>";
  } else if ($kilometrage > 100000 && $kilometrage < 200000) {
    echo "La voiture a moyennement servi";
    echo "<hr/>";
  } else if ($kilometrage > 200000) {
    echo "La voiture a beaucoup servi";
    echo "<hr/>";
  }
}

public function annee_circulation($mise_en_circulation) {
 $annee = date('Y');
 $age = $annee - $mise_en_circulation;
 echo "$age ans.";
 echo "<hr/>";
}

// public function drive($kilometrage) {
//   $kilometrage += 100000;
//   $this->setkilometrage($kilometrage);
//   // $kilometre = $kilometrage + $kilometre;
//   // echo "Le compteur kilométrique a changé de " .$kilometre. " km";
//   echo $kilometrage;
// }

public function display() {
  $voiture = [$car];
  foreach ($voiture as $voiture) {

  }
}


}





 ?>
