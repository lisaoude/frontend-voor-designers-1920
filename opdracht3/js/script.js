const section = document.querySelector('section');
const button = document.getElementById('button');
button.addEventListener('click', showBooks);


function showBooks(jsonObj) {

    let requestURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    let request = new XMLHttpRequest();
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

    for (let i = 0; i < jsonObj.length; i++) {

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
    myDiv.classList.toggle('remove');

    var myDiv = document.getElementById('placeholder2');
    myDiv.classList.toggle('remove');

    var myDiv = document.getElementById('placeholder3');
    myDiv.classList.toggle('remove');
}