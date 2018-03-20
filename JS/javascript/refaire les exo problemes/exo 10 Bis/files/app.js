// électionner le body
//
// lui retirer la classe "bg-aqua"
//
// lui ajouter la classe "bg-olive"

document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-olive');
//
// sélectioner first-paragraph
//
// lui retirer les classes "bg-lime" et "gray"
//
// lui ajouter la class "aqua"
var first = document.getElementById('first-paragraph');
first.classList.remove('bg-lime');
first.classList.remove('gray');
first.classList.add('aqua');
// sélectionner tous les éléments qui ont la classe 'bg-silver'
//
// modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
//
// modifier tout ces éléments en leurs supprimant la classe "bg-silver"
//

var machin = document.querySelector('blockquote');

machin.classList.remove('bg-silver');
machin.classList.add('bg-teal');

// sélectionne tous les éléments de type 'blockquote'
//
// modifier tout ces éléments en leurs ajoutant la classe "bg-white"

var block = document.querySelector('blockquote');
block.classList.add('bg-white');

// avec querySelector sélectioner l'élément 'my-table'
//
// lui ajouter la classe "bg-purple"

var ok = document.getElementById('my-table');
ok.classList.add('bg-purple');

// avec querySelectorAll sélectioner tous les paragraphes dans 'container'
//
// modifier tout ces éléments en leurs ajoutant la classe 'shadow'

var lol = document.querySelectorAll('p');
for (var i = 0; i < lol.length; i++) {
  lol[i].classList.add('shadow');
}

// sélectionne tous les éléments de type 'pre'
//
// avec la propriété style change la couleur de texte
//
// avec la propriété style change la couleur de fond grâce à backgroundColor
//
// avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )
//
// avec la propriété style ajouter un border-bottom de 3px solid red

var po = document.querySelector('pre');
po.style.color = "yellow";
po.style.background = "red";
po.style.borderTop = "3px solid black";
po.style.borderBottom= "3px solid blue";

// sélectionne le premier élément de type 'h3'
//
// ramplacer son contenu HTML en <em>Itelic title ! yeah !</em>

var italique = document.body.querySelector('h3');
italique.innerHTML=("<em> Itelic title! yeah!</em>");
// sélectionne le premier élément de type 'h2'
//
// ramplacer son contenu texte par en <strong>HTML doens't work !</strong>

var strong = document.querySelector('h2');
strong.innerHTML = ("<strong> HTML doesn't work ! </strong>");
strong.style.color = 'red';

// sélectioner le premier 'ul'
//
// crée un élément de type 'li'
//
// ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'
//
// ajouter ce 'li' l'élément dans le ul

var liste = document.querySelector('ul');

var creer = document.createElement('li');

creer.innerHTML= "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
liste.appendChild(creer);

// sélectionner le premier lien dans le 'li' précedement crée
//
// avec la propriété style change la couleur de texte de ce lien
// creer.querySelector('a').style.color = 'yellow';

var z = creer.querySelector('a');
z.style.color = "red";

// sélectionner le premier élément 'ol'
//
// faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children
//
// supprimer chaque enfant de 'ol' grâce à removeChild()
//



var mo = document.querySelector('ol');
while (mo.firstChild) {
  mo.removeChild(mo.firstChild);
}


// déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
//
// faire une boucle sur tous les enfants du tableau précédement crée
//
// pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()
//
// ajouter à chaque 'li' la valeur courrante tableau
//
// ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné


var ta = ["silent teacher", "code monkey", "code combat"];
for (var i = 0; i < ta.length; i++) {
  var az = document.createElement("li");
  az.innerHTML = ta[i];
  mo.appendChild(az);
}
