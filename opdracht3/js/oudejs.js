// section declareren door deze aan te roepen van de HTML
const section = document.querySelector('section');


// JSON bestand inladen mbv de link (6-12)
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Als je een loader wilt laten zien, doe dat hier. Meteen weghalen bij de onload.

request.onload = function () {

    // In response zit de data opgeslagen.
    const movies = request.response;

    // de functie showMovies zorgt ervoor dat inhoud wordt aangemaakt & in de HTML wordt weergegeven
    showMovies(movies);
}


// functie declareren, const 'details' aanmaken, welke data uit het JSON file haalt. 
function showMovies(jsonObj) {
    const details = jsonObj;

    console.log(details)
    console.log('eerstefilm', details[3])

    // elementen aanmaken in de for loop, welke nodig zijn om de content te kunnen tonen. Hierdoor kunnen we door elke array 'loopen'. Deze loop gaat net zo lang door totdat de i kleiner is dan het aantal items in het JSON object.
    for (let i = 0; i < details.length; i++) {

        // article aanmaken waar de andere elementen in komen te staan
        const myArticle = document.createElement('article');

        if (details[i].title == 'Fight Club') {
            myArticle.setAttribute('class', 'fightclub')
        }

        // elementen aanmaken (33-35)
        const title = document.createElement('h2');
        const plot = document.createElement('p');
        const cover = document.createElement('img');

        // data voor de elementen ophalen (38-40)
        title.textContent = details[i].title;
        plot.textContent = details[i].plot;
        cover.src = details[i].cover;

        cover.setAttribute('class', 'cover')

        // elementen worden als child genest in het article
        myArticle.appendChild(title);
        myArticle.appendChild(plot);
        myArticle.appendChild(cover);

        // articles in de section nesten
        section.appendChild(myArticle);
    }
}
