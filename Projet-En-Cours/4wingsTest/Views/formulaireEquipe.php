<div class="container formulaireSelection">
   <div class="row formulaireMain">
     <div class="col-md-9 formulaireLeft">
        <h3>Veuillez soumettre votre <span class="marron">Equipe</span> </h3>
        <p>Nous vous répondrons dans les meilleurs délais.</p>
        <form role="form" class=""enctype="multipart/form-data" action="?page=formulaireEquipe" method="post" >
          <div class="fichier">
              <div class="form-group">
                <label class="fichierok">Votre Fichier :
                  <div class="fichierDiv">
                    <input type="hidden" name="MAX_FILE_SIZE" value="4000000" />
                    <input type="file" name="fichier" id="fileToUpload">
                  </div>
                </label>
              </div>
          </div>

          <div class="form-group">
            <label>Nom :
              <input type="text" class="form-control" id="name" name="name" placeholder="Ex: Dupont" required>
            </label>
          </div>
          <br/>

          <div class="form-group">
            <label>Description :
              <textarea class="form-control" name="message" type="textarea" id="message" maxlength="500" rows="7" cols="110">
              </textarea>
            </label>
          </div>

          <input action ="?page=formulaireEquipe" type="submit" id="submit" name="submit" class="btn btn_success2 Send" value="Envoyer"/>
        </form>
      </div>
    </div>
</div>

<?php
// Connexion à la base de données
try
{
  $bdd= new PDO ('mysql:host=localhost; dbname=4wings', 'root', 'user');

}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}


  $reponse=$bdd->query("SELECT * FROM Team");
  while($donnees=$reponse->fetch())
  {
    echo '<p>' . $donnees ['Title'] . '</p>';
  }

  $reponse->closeCursor();

 ?>

 <?php
    if(!empty($_FILES)) {
        $file_name = $_FILES['fichier']['name'];
        $file_extension = strrchr($file_name, ".");

         $file_tmp_name = $_FILES['fichier']['tmp_name'];
         $file_dest = 'files/' .$file_name;
         //'files/' .$file_name;
         $extension_autorisees = array('.pdf', '.PDF');

         if(in_array($file_extension, $extension_autorisees)){
           if(move_uploaded_file($file_tmp_name, $file_dest)){
               echo 'Fichier envoyé avec succès';
            } else {
                echo "Une erreur est survenue lors de l'envoie du fichier";
           }
         } else {
             echo "Seul les fichiers PDF sont autorisées";

      }
    }
?>
