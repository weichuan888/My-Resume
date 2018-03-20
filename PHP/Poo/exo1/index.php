<?php
// require 'form.php';
//
// $form = new Form;
// $form->create('index.php');
// $form->text('text');
// $form->select('select');
// $form->button('radio', 'oui');
// $form->textarea();
// $form->checkbox('Gloup');
// $form->button('submit', 'valider');

require 'voiture.php';

$marque = "BMW";
$poids = 2;
$immatriculation = "BE-2354";
$kilometrage = 50000;
$mise_en_circulation= 1986;
$kilometre = 100000;


$vehicule = new Voiture(
  $marque,
  $poids,
  $immatriculation,
  $kilometrage,
  $mise_en_circulation,
  $kilometre);

  $car = new Voiture ('audi', 2.5, 'BE-345-32', 150000,1986);


 ?>
