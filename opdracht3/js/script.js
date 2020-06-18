// section declareren door deze aan te roepen vanuit de HTML. In deze section wordt straks de data uit de JSON geladen.
const section = document.querySelector('section');

// variabele button aanmaken en deze koppelen aan het element uit de HTML aan de hand van z'n id.
var button = document.getElementById('button');

// variabele buttonContainer aanmaken en deze koppelen aan het element uit de HTML aan de hand van z'n id. In deze container wordt straks een 'laad meer' button geplaatst.
var buttonContainer = document.getElementById('buttonContainer');



// wanneer er op de button wordt geklikt, wordt functie showBooks ingezet.
button.addEventListener('click', showBooks);

// functie declareren.
function showBooks(jsonObj) {

    // JSON bestand inladen mbv de link.
    let requestURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';

    // XMLHttpRequest object aanmaken, hiermee wordt externe data geladen.
    let request = new XMLHttpRequest();

    // koppel de JSON URL aan de XMLHttpRequest.
    request.open('GET', requestURL);

    // aangeven dat het type data dat terugkomt JSON data is.
    request.responseType = 'json';

    // request versturen.
    request.send();

    // functie declareren. Hier wordt er bij het laden een actie uitgevoerd.
    request.onload = function () {

        // constante variabele books aanmaken, welke de response opvraagt. In de response zit de data opgeslagen.
        const books = request.response;

        // bij het laden wordt de functie showDetails uitgevoerd.
        showDetails(books);
    }
}

// functie declareren.
function showDetails(jsonObj) {

    // variabele details haalt data uit de JSON.
    const details = jsonObj;

    // elementen aanmaken in de for loop, welke nodig zijn om de content te kunnen tonen. Hierdoor kunnen we door elke array 'loopen'. Deze loop gaat net zo lang door totdat de i kleiner is dan het door mij aangegeven limiet van 12 items.
    for (let i = 0; i < 12; i++) {

        // article aanmaken waar de andere elementen in komen te staan.
        var myArticle = document.createElement('article');

        // variabelen aanmaken en deze als elementen aanmaken in de HTML.
        var title = document.createElement('h1');
        var author = document.createElement('h2');
        var year = document.createElement('h3');
        var myImg = document.createElement('img');

        // data voor de elementen ophalen.
        title.textContent = details[i].title;
        author.textContent = details[i].author;
        year.textContent = details[i].year;
        myImg.src = details[i].imageLink;

        // elementen als child nesten in het article van eerder.
        myArticle.appendChild(title);
        myArticle.appendChild(author);
        myArticle.appendChild(year);
        myArticle.appendChild(myImg);

        // articles in de eerder gedeclareerde section nesten.
        section.appendChild(myArticle);
    }
}



// wanneer er op de button wordt geklikt, wordt functie removePlaceholder ingezet.
button.addEventListener('click', removePlaceholder);

// functie declareren. Hier worden de placeholders verwijderd.
function removePlaceholder() {

    // ik voeg hier een class toe aan drie elementen, vandaar dat ik 3x een id aanroep ipv een class (je kunt geen class toevoegen aan een element dat al een class heeft, wel aan een element dat al een id heeft)

    // variable myDiv1 aanmaken en deze koppelen aan het element uit de HTML aan de hand van z'n id.
    var myDiv1 = document.getElementById('placeholder1');

    // variable de class remove geven
    myDiv1.classList.add('remove');

    var myDiv2 = document.getElementById('placeholder2');
    myDiv2.classList.add('remove');

    var myDiv3 = document.getElementById('placeholder3');
    myDiv3.classList.add('remove');
}




// wanneer er op de button wordt geklikt, wordt functie addButton ingezet.
button.addEventListener('click', addButton);

// functie declareren. Hier wordt de 'meer laden' button aangemaakt.
function addButton() {

    // variabele buttonMore aanmaken en deze als element aanmaken in de HTML.
    var buttonMore = document.createElement('button');

    // variable buttonText aanmaken waarmee er een nieuwe string aan tekst wordt aangemaakt.
    var buttonText = document.createTextNode('show more books..')

    // de button een type en een id meegeven.
    buttonMore.setAttribute('type', 'submit');
    buttonMore.setAttribute('id', 'buttonMore');

    // eerder aangemaakte string van text in de button nesten.
    buttonMore.appendChild(buttonText);

    // de button in de al bestaande en eerder gedefinieerde container nesten.
    buttonContainer.appendChild(buttonMore);
}




// wanneer er op de button container wordt geklikt, wordt functie showMore ingezet. De eventListener staat hier op de container, omdat de button 'niet bestaat' in de HTML en er anders niet wordt herkend dat er op de button wordt geklikt.
buttonContainer.addEventListener('click', showMore);

// functie declareren. Hier worden de volgende 12 boeken geladen. Hetzelfde principe als eerder.
function showMore(jsonObj) {

    let requestURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const books = request.response;
        showMoreBooks(books);
    }
}

function showMoreBooks(jsonObj) {
    const details = jsonObj;

    for (let i = 12; i < 24; i++) {

        var myArticle = document.createElement('article');

        var title = document.createElement('h1');
        var author = document.createElement('h2');
        var year = document.createElement('h3');
        var myImg = document.createElement('img');

        title.textContent = details[i].title;
        author.textContent = details[i].author;
        year.textContent = details[i].year;
        myImg.src = details[i].imageLink;

        myArticle.appendChild(title);
        myArticle.appendChild(author);
        myArticle.appendChild(year);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}


// wanneer er op de button container wordt geklikt, wordt functie removeButton ingezet. De eventListener staat hier op de container, omdat de button 'niet bestaat' in de HTML en er anders niet wordt herkend dat er op de button wordt geklikt. Ook kun je niet iets verwijderen wat je nodig hebt om de functie in te zetten.
buttonContainer.addEventListener('click', removeButton);

// functie declareren. Hier wordt de 'meer laden' button verwijderd.
function removeButton() {

    // variable myDiv4 aanmaken en deze koppelen aan het element uit de HTML aan de hand van z'n id.
    var myDiv4 = document.getElementById('buttonMore');

    // variable de class removeButton geven
    myDiv4.classList.add('removeButton');

}
