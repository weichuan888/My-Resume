<?php
  // if(isset($_FILES['fileToUpload']) && $_FILES['fileToUpload']['error'] == 0)
  // {
  //   if($_FILES['fileToUpload']['size']<= 4000000)
  //   {
  //     $infoFicher = pathinfo($_FILES['fileToUpload']['name']);
  //     $extensionUpload = $infoFicher['extension'];
  //     $extentionAutoriser = array ('jpg', 'jpeg', 'gif', 'png');
  //     if (in_array($extensionUpload, $extentionAutoriser))
  //     {
  //       mkdir("upload/", 0777, true);
  //       move_upload_file($_FILES['fileToUpload']['tmp_name'] 'upload/' . basename($_FILES['fileToUpload']['name']));
  //
  //         echo "L'envoi a bien été effectué!";
  //
  //
  //     }
  //   }
  // }
  // else {
  //   echo "erreur";
  // }

 ?>

 <?php
 // Connexion à la base de données
 try
 {
 	$bdd = new PDO('mysql:host=localhost;dbname=4wings;charset=utf8', 'root', 'user');
 }
 catch(Exception $e)
 {
         die('Erreur : '.$e->getMessage());
 }

 // Insertion du message à l'aide d'une requête préparée
 $req = $bdd->prepare('INSERT INTO Team (url_Img, Title, Description) VALUES(?, ?, ?)');
 $req->execute(array($_POST['fileToUpload'], $_POST['name'], $_POST['message']));

 // Redirection du visiteur vers la page du minichat
 // header('Location: formulaireEquipe.php');
 ?>
x²
