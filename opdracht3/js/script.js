// section declareren door deze aan te roepen vanuit de HTML
const section = document.querySelector('section');

// variabelen button en buttonMore aanmaken en deze koppelen aan de elementen uit de HTML aan de hand van IDs
const button = document.getElementById('button');
const buttonMore = document.getElementById('buttonMore');

// wanneer er op de knop wordt geklikt, wordt functie showBooks ingezet
button.addEventListener('click', showBooks);


//functie declareren
function showBooks(jsonObj) {

    // JSON bestand inladen mbv de link
    let requestURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';

    //XMLHttpRequest object aanmaken, hiermee wordt externe data geladen
    let request = new XMLHttpRequest();

    //koppel de JSON URL aan de XMLHttpg
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const books = request.response;
        showDetails(books);
    }
}

function showDetails(jsonObj) {
    const details = jsonObj;

    for (let i = 0; i < 12; i++) {

        const myArticle = document.createElement('article');

        const title = document.createElement('h1');
        const author = document.createElement('h2');
        const year = document.createElement('h3');
        const myImg = document.createElement('img');

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


button.addEventListener('click', removePlaceholder);

function removePlaceholder() {
    var myDiv = document.getElementById('placeholder1');
    myDiv.classList.add('remove');

    var myDiv = document.getElementById('placeholder2');
    myDiv.classList.add('remove');

    var myDiv = document.getElementById('placeholder3');
    myDiv.classList.add('remove');

    buttonMore.classList.remove('removeButton');
}



buttonMore.addEventListener('click', showMore);

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

        const myArticle = document.createElement('article');

        const title = document.createElement('h1');
        const author = document.createElement('h2');
        const year = document.createElement('h3');
        const myImg = document.createElement('img');

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

buttonMore.addEventListener('click', removeButton);

function removeButton() {
    var myDiv = document.getElementById('buttonMore');
    myDiv.classList.add('removeButton');

}
