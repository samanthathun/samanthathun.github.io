let output = document.querySelector('div.threetowns');


let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;

    console.log(towndata);

    let town = towndata['towns'];

    for (let i = 0; i < town.length; i++) {
        console.log(town.name);
        if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven" ) {
            let divtown =document.createElement('div.townbox');
            let myH2 = document.createElement('h2');
            let myH3 = document.createElement('h3');
            let myP1 = document.createElement('p');
            let myP2 = document.createElement('p');
            let myP3 = document.createElement('p');


            myH2.textContent = town.name;
            myH3.textContent = town.motto;
            myP1.textContent = town.yearFounded;
            myP2.textContent = town.currentPopulation;
            myP3.textContent = town.averageRainFall;


            divtown.appendChild(myH2);
            divtown.appendChild(myH3);
            divtown.appendChild(myP1);
            divtown.appendChild(myP2);
            divtown.appendChild(myP3);
            output.appendChild(divtown);

    
        }
    }
}


