<?php
  class Personnage {
    private $_force=100;
    private $_localisation='Portugal';
    private $_experience=1;
    private $_degats=20;

    //
    // public function parler () {
    //   echo "Je suis un personnage!";
    // }
    // public function afficherExperience() {
    //   echo $this->_experience;
    // }
    public function frapper($persoAFrapper) {
      $persoAFrapper->_degats += $this->_force;
    }
    public function gagnerExperience() {
      echo $this->_experience = $this->_experience+1;
    }

  }

  $perso1 = new Personnage;
  $perso2= new Personnage;

  $perso1->frapper($perso2)

  // $perso-> parler();
  // $perso->afficherExperience();
  // $perso-> gagnerExperience();











?>
