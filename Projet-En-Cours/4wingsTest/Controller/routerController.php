<?php

  $page = isset($_GET['page']) ? htmlentities($_GET['page']) : 'default';

  switch ($page) {
    case 'accueil':
      include(Controller . 'accueilController.php');
      $controller = new AccueilController;
      break;

    case 'contact':
      include(Controller . 'contactController.php');
      $controller = new ContactController();
      break;

    case 'equipe':
      include(Controller . 'equipeController.php');
      $controller = new EquipeController();
      break;

    case 'faq':
      include(Controller . 'faqController.php');
      $controller = new FaqController();
      break;

    case 'logement':
      include(Controller . 'logementController.php');
      $controller = new LogementController();
      break;

    case 'mission':
      include(Controller . 'missionController.php');
      $controller = new MissionController();
      break;

    case 'projet-logement':
      include(Controller . 'projet-logementController.php');
      $controller = new ProjetLogementController();
      break;

    case 'projet-sante':
      include(Controller . 'projet-santeController.php');
      $controller = new ProjetSanteController();
      break;
    case 'projet-tech-education':
      include(Controller . 'projet-tech-educationController.php');
      $controller = new ProjetTechEducationController();
      break;

    case 'sante':
      include(Controller . 'santeController.php');
      $controller = new SanteController();
      break;

    case 'selection-projet':
      include(Controller . 'selection-projetController.php');
      $controller = new SelectionProjetController();
      break;

    case 'slider':
      include(Controller . 'sliderController.php');
      $controller = new SliderController();
      break;

    case 'tech-education':
      include(Controller . 'tech-educationController.php');
      $controller = new TechEducationController();
      break;

    case 'valeur':
      include(Controller . 'valeurController.php');
      $controller = new ValeurController();
      break;
    case 'formulaire':
      include(Controller . 'formulaireSelectionController.php');
      $controller = new FormulaireSelectionController();
      break;
    case 'formulaireEnvoi':
      include(Controller . 'formulaireEnvoiController.php');
      $controller = new FormulaireEnvoi();
      break;
    case 'formulaireEquipe';
      include(Controller . 'formulaireEquipeController.php');
      $controller = new FormulaireEquipe();
      break;

    default:
      include(Controller . 'accueilController.php');
      $controller = new AccueilController();
      break;
  }

  $controller->run();

 ?>
