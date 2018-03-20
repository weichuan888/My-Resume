# Exercice 8 : Html et CSS

## Voici le code html 


````
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>exo8</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Montserrat:400,700">

  <script src="https://use.fontawesome.com/814d817aaf.js"></script>

</head>
<body>



  <div class="bloc">
    <div class="main">
      <img src="https://raw.githubusercontent.com/weichuan888/learning-environnement/master/exo%208/images/exo8TimBernersLee.jpeg" alt="profil">
      <div class="profil">
        <h1>Tim Berners-Lee</h1>
        <h2>Inventor of HTML</h2>
      </div>
      <div class="bold">
        <p>Tim Berners-Lee is the
        <span class="gras">inventor</span> of the Web. In 1989,
        Tim was working in a computing services section of CERN when he came up with
        the concept, at the time he had no idea that it would be implemented
        on such an
        <span class="gras">enormous scale.</span>
        </p>
      </div>
    </div>

    <div class="you">
        <button>
          See for yourself
        </button>

    </div>

  </div>


  <div class="bloc">
    <div class="web">

          <div class="icon-button">
            <i class="fa fa-facebook" aria-hidden="true"></i><br/>
              <div class="site">
              Facebook
              </div>
          </div>
          <div class="icon-button">
            <i class="fa fa-linkedin" aria-hidden="true"></i><br/>
              <div class="site">
              Linkedin
              </div>
          </div>
          <div class="icon-button">
            <i class="fa fa-twitter" aria-hidden="true"></i><br/>
            <div class="site">
            Twitter
            </div>
          </div>
    </div>
  </div>



  <div class="bloc">
      <div class="principal">
          <h2><span class="surligne">His</span> favorite movies</h2>
      </div>

      <div class="image">
          <div class="img1">
            <img src="https://raw.githubusercontent.com/weichuan888/learning-environnement/master/exo%208/images/exo8Space.jpeg" alt="img1">
          </div>
          <div class="img2">
            <img src="https://raw.githubusercontent.com/weichuan888/learning-environnement/master/exo%208/images/exo8Hulot.jpeg" alt="img2">
          </div>
          <div class="img3">
            <img src="https://raw.githubusercontent.com/weichuan888/learning-environnement/master/exo%208/images/exo8Alien.jpeg" alt="img3">
          </div>
      </div>

      <div class="droite">
          <div class="rectangle1">
              <div class="titre">
                <h3>2001 - Space Odyssey</h3>
              </div>
              <div class="texte">
                <p>Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the
                intelligent computer H.A.L. 9000, sets off on a quest</p>
              </div>
          </div>
          <div class="rectangle2">
            <div class="titre">
              <h3>Monsieur Hulot</h3>
            </div>
            <div class="texte">
              <p>Monsieur Hulot comes to a beachside hotel for a vacation, where he accidentally (but good-naturedly) causes havoc.</p>
            </div>
          </div>
          <div class="rectangle3">
            <div class="titre">
              <h3>Alien</h3>
            </div>
            <div class="texte">
              <p>The commercial vessel Nostromo a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.</p>
            </div>
          </div>
      </div>
      <div class="clear"></div>
  </div>


</body>
</html>
````

## Voici le code CSS 

````
body {
  background-color: #E0E3E8;
}


.bloc {
width: 800px;
background-color: white;

border-radius: 5px;
margin-left: auto;
margin-right: auto;
margin-top: 35px;
margin-bottom: 20px;
border-left: solid rgb(225,225,225) 2px;
border-right: solid rgb(225,225,225) 2px;
border-bottom: solid rgb(210,210,210) 3px;

}


.main img {
  display: block;
  border-radius: 150px;
  width: 250px;
  height: 250px;
  margin: 0 auto;

}





h1{
  color: darkred;
  font-weight: bold;
  font-size: 30px;
  font-family: cursive;
  text-align: center;
  display: block;

}

.profil h2{
  color: black;
  font-size: 25px;
  font-family: helvetica;
  text-align: center;

}
.bloc .main .bold p{

  font-size: 20px;
  text-align: justify;
  margin-right: 30px;
  margin-left: 30px;
  font-family: 'Open Sans', sans-serif;


}

 .bold .gras{
  font-weight: bold;
}

button {
  background-color: #E8433A;
  color: white;
  font-size: 22px;
  font-family: Helvetica;
  text-align: center;
  margin-left: 300px;
  margin-right: 220px;
  margin-bottom: 20px;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;


}

.bloc .web {



}
.icon-button{

  font-size: 25px;
  color: grey;
  margin-left: 10%;
  padding-bottom: 35px;
  margin-right: 10%;
  display: inline-block;



}

.icon-button i {
  font-size: 20px;
  margin: 30%;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 5px;
}

.bloc .principal .surligne {
  background-color: #E0E3E8;


}

.img1, .img2, .img3 {
  transform: scale(0.8);

}

.principal h2{
 font-family: cursive;
 margin-top: 40px;
 text-align: center;
 padding-top: 50px;

}



.image {
  float: left;
  width: 300px;
  padding-left: 40px;
  padding-top: 60px;


}

.droite {
  font-family: 'Montserrat', sans-serif;


}


.rectangle1{

  margin-top: 140px;
  font-size: 20px;
  margin-right: 60px;

}

.rectangle2{
  margin-top: 205px;
  font-size: 20px;
  margin-right: 60px;
}

.rectangle3 {
  margin-top: 240px;
  font-size: 20px;
  margin-right: 60px;
}

 .titre {

  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;

}
````


## Les difficulté rencontrés :

* centrer les div
* aligner les textes
* aligner les images et les textes.

