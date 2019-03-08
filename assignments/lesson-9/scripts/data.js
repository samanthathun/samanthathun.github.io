let output = document.querySelector('section');


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
        if (town.name == "Preston") {

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

            output.appendChild(myH2);
            output.appendChild(myH3);
            output.appendChild(myP1);
            output.appendChild(myP2);
            output.appendChild(myP3);

        }
    }


}

