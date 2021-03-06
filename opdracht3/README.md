## Opdracht
Voor deze opdracht heb ik een pagina gemaakt waarop de beste boeken aller tijden te vinden zijn. De data van deze boeken wordt opgehaald uit <a href='https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'/>dit JSON file.</a> Wanneer de gebruiker op de button klikt, worden er 12 boeken geladen op de pagina. Als de gebruiker vervolgens op de volgende button klikt, worden er nog eens 12 boeken geladen. De uitleg van mijn JavaScript code is te vinden <a href='https://github.com/lisaoude/frontend-voor-designers-1920/blob/master/opdracht3/js/script.js'/>in het bestand zelf</a>.

<a href='https://lisaoude.github.io/frontend-voor-designers-1920/opdracht3'/> Hier is mijn ontwerp te vinden. </a>

<br>
<br>

## Vragen
1. Hoe zou ik een button anders onderaan de pagina kunnen krijgen dan met position relative/absolute en een top? Hij kwam hier anders onderaan de viewport, omdat hij niets heeft om onder aan aan te sluiten want de content komt uit de JSON en niet de html. Idee: hij komt onder een section te staan, dus de section een vaste hoogte meegeven/een hoogte geven wanneer de knop wordt ingeladen??

2. Hoe zou ik mijn placeholders anders weer kunnen laten verdwijnen? Ik heb ze nu elk een id gegeven en ze gezamenlijk met behulp van een class een -top gegeven zodat ze uit het beeld komen te staan, hahaha.

3. Hou zou ik een betere for loop kunnen maken? Ik heb er nu 2 gemaakt, eentje van 0-12 voor de eerste lading en de ander van 12-24 voor de tweede lading. Ik denk dat dit ook wel met 1 for loop kan?

<br>
<br>

## States
<h4> Blank State </h4>
Wanneer de gebruiker eerst op de pagina komt, treft hij deze in de blank state. Er is nog geen data geladen.

<br>
<br>

<h4> Partial State </h4>
Toch is de pagina niet geheel leeg. Er zijn placeholders op de pagina te zien als een uitlijning waar de content zal komen te staan wanneer deze wordt geladen. De partial state is ook nog op de pagina te zien na het klikken op de eerste button - er kan namelijk ook nog op de knop voor meer boeken worden geklikt.

<br>
<br>

<h4> Ideal State </h4>
De ideal state is bereikt wanneer de gebruiker op de button(s) heeft geklikt. 

<br>
<br>
<br>

## Principles of User Interface Design
<h4> 04. Keep users in control </h4> 
Binnen mijn ontwerp is dit principe terug te vinden bij de twee buttons. De twee buttons geven duidelijk aan wat er zal gaan gebeuren wanneer er op de button wordt geklikt. Ook de drie placeholders laten de gebruiker weten waar de content geplaatst zal worden wanneer hij op de button klikt.

<br>
<br>

<h4> 08. Provide a natural next step </h4> 
De natural next step is binnen mijn ontwerp te vinden bij de 'show more books' button. Wanneer de gebruiker naar beneden gescrollt heeft, zal deze vervolgens de button vinden en weten wat zijn verwachtte volgende stap is. Ook is er bij deze button en de eerst button op de pagina een hover state aanwezig, welke de gebruiker laat weten dat de buttons klikbaar zijn.

<br>
<br>

<h4> 09. Appearance follows behavior </h4> 
Binnen mijn ontwerp heb ik dit principe verwerkt door tekst eruit te laten zien als tekst en de buttons er ook duidelijk uit te laten zien als klikbare buttons. Ze vallen op binnen het scherm en hebben daarnaast ook een hover state, wat de gebruiker laat weten dat de buttons klikbaar zijn.

<br>
<br>

<h4> 11. Strong visual hierarchies work best </h4> 
Visuele hiërarchie is terug te zien binnen de reguliere teksten op de pagina. Titels zijn groter dan de broodteksten en zijn dikgedrukt. De broodteksten hebben een normaal fontweight en zijn kleiner dan de titels. Ook het verschil tussen de teksten en de buttons is duidelijk. De buttons hebben meer opvallende kleuren, waar de teksten juist in het zwart op de pagina staan. Verder is duidelijk onderscheid te zien tussen de verschillende boeken op de pagina, omdat deze elk hun eigen gekleurde achtergrondvakje hebben.
