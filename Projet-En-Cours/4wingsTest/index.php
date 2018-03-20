<?php
  define ('View', 'Views/');
  define ('Controller', 'Controller/');
  define ('Model', 'Model/');
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- favicon -->
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./img/favicon.ico" type="image/x-icon">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- caroussel -->
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/style_carousel.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/jquery.jscrollpane.css" media="all" />

    <!-- fichier css -->

    <link rel="stylesheet" type="text/css" href="stylesheets/sass/style.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/contact.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/equipe.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/faq.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/logement.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/mission.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/valeur.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/selection-projet.css" />
    <link rel="stylesheet" type="text/css" href="stylesheets/sass/formulaireSelection.css" />







    <!-- google font => police de caracteres -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet"/>
    <!-- <link rel="stylesheet" href="../stylesheets/index.css">
    <link rel="stylesheet" href="../stylesheets/footer.css">
    <link rel="stylesheet" href="../stylesheets/icomoon.css">
    <link rel="stylesheet" href="../stylesheets/nav.css"> -->
    <!-- <link rel="stylesheet" href="../stylesheets/tech.css">
    <link rel="stylesheet" href="../stylesheets/logement.css">
    <link rel="stylesheet" href="../stylesheets/sante.css"> -->
    <!-- CSS page projet -->
    <!-- <link rel="stylesheet" href="../stylesheets/projet_logement.css">
    <link rel="stylesheet" href="../stylesheets/projet_tech.css">
    <link rel="stylesheet" href="../stylesheets/projet_sante.css"> -->

    <!-- CSS MOBILE -->
    <link rel="stylesheet" href="../stylesheets/mobile.css">
    <!-- titre -->
    <title>4wings</title>
  </head>
  <body>
    <?php include (Controller . 'routerController.php') ?>
