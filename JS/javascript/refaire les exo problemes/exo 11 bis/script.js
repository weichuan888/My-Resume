var ok = function(event) {

};
var test = document.getElementByClass('carre');
test.addEventListener('mouseover', ok);

let po = document.getElementById('ok');
function action(e) {
  alert(e.type)
}
po.onclick = action;
