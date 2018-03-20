alert("hello");


function soustraction (a,b) {
  if (b === undefined) {
    b = 0
  }
  return a - b
  }




function division (a,b) {
  if (b === undefined) {
    b = 2

  }
  return a / b
}




function multiplie (a,b) {
  if (b === undefined) {
    b = 1
  }
  return a * b
}




function pourcentage (a,b) {
  if (b === undefined) {
    b = 1
  }
  return ((a / 100) * b) + "%"
}




var a = prompt ("Premier nombre?");
var b = prompt ("Second nombre?");

var result = ((a / 100) * b);
console.log (result + "%");




var vitesse = function (distance, temps) {
  return (distance / temps)
}

  console.log(vitesse(100,2) + "km/h");
