/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// VASTE VARIABELEN
var buttonRood = document.querySelector('#roodknop');
var buttonOranje = document.querySelector('#oranjeknop');
var buttonGroen = document.querySelector('#groenknop');
var buttonBlauw = document.querySelector('#blauwknop');
var buttonRoze = document.querySelector('#rozeknop');
var buttonPaars = document.querySelector('#paarsknop');

var alleRodeFotos = document.querySelectorAll('.rood');
var alleOranjeFotos = document.querySelectorAll('.oranje');
var alleGroeneFotos = document.querySelectorAll('.groen');
var alleBlauweFotos = document.querySelectorAll('.blauw');
var alleRozeFotos = document.querySelectorAll('.roze');
var allePaarseFotos = document.querySelectorAll('.paars');


buttonRood.addEventListener('click', function () {
    alleOranjeFotos.classList.toggle("verstoppen");
});


console.log(alleRodeFotos);
console.log(alleOranjeFotos);
console.log(alleGroeneFotos);
console.log(alleBlauweFotos);
console.log(alleRozeFotos);
console.log(allePaarseFotos);

console.log(buttonRood);
console.log(buttonOranje);
console.log(buttonGroen);
console.log(buttonBlauw);
console.log(buttonRoze);
console.log(buttonPaars);
