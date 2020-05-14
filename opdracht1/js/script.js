/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// VASTE VARIABELEN
var knopRood = document.querySelector('#knoprood');
var knopOranje = document.querySelector('#knoporanje');
var knopGroen = document.querySelector('#knopgroen');
var knopBlauw = document.querySelector('#knopblauw');
var knopRoze = document.querySelector('#knoproze');
var knopPaars = document.querySelector('#knoppaars');


var rood1 = document.querySelector('.rood1');
var rood2 = document.querySelector('.rood2');
var rood3 = document.querySelector('.rood3');
var rood4 = document.querySelector('.rood4');
var rood5 = document.querySelector('.rood5');
var rood6 = document.querySelector('.rood6');

var oranje1 = document.querySelector('.oranje1')
var oranje2 = document.querySelector('.oranje2')
var oranje3 = document.querySelector('.oranje3')
var oranje4 = document.querySelector('.oranje4')
var oranje5 = document.querySelector('.oranje5')
var oranje6 = document.querySelector('.oranje6')



knopOranje.addEventListener('click', function () {
    rood1.classList.toggle("verstoppen");
    rood2.classList.toggle("verstoppen");
    rood3.classList.toggle("verstoppen");
    rood4.classList.toggle("verstoppen");
    rood5.classList.toggle("verstoppen");
    rood6.classList.toggle("verstoppen");
});

knopRood.addEventListener('click', function () {
    oranje1.classList.toggle("verstoppen");
    oranje2.classList.toggle("verstoppen");
    oranje3.classList.toggle("verstoppen");
    oranje4.classList.toggle("verstoppen");
    oranje5.classList.toggle("verstoppen");
    oranje6.classList.toggle("verstoppen");
});
