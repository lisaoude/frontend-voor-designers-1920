/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// VASTE VARIABELEN
var rood_klik = document.querySelector('rood');
var oranje_klik = document.querySelector('oranje');
var groen_klik = document.querySelector('groen');
var groen_klik = document.querySelector('blauw');
var groen_klik = document.querySelector('roze');
var groen_klik = document.querySelector('paars');




// FUNCTIE 1 - ROOD
function verwerkRood_klik(event) {
    event.preventDefault();

}

rood_klik.addEventListener('onclick', verwerkRood_klik);



rood_klik.classList.toggle('rood');
oranje_klik.classList.toggle('oranje');
groen_klik.classList.toggle('groen');
blauw_klik.classList.toggle('blauw');
roze_klik.classList.toggle('roze');
paars_klik.classList.toggle('paars');
