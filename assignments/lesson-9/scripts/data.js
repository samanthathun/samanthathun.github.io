let output = document.querySelector('div.threetowns');


let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;

   

    let town = towndata['towns'];
    console.log(town);
    for (let i = 0; i < town.length; i++) {
    
        if (town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven" ) {
            let divtown =document.createElement('div');
            divtown.setAttribute('class', 'townbox');
            let myH3 = document.createElement('h3');
            let myH4 = document.createElement('h4');
            let myP1 = document.createElement('p');
            let myP2 = document.createElement('p');
            let myP3 = document.createElement('p');
            let prestonimg = ;
            let sodaspringsimg = ;
            let fishhavenimg = ;

            myH3.textContent = town[i].name;
            myH4.textContent = town[i].motto;
            myP1.textContent = "Year Founded: " + town[i].yearFounded;
            myP2.textContent = "Current Population: " + town[i].currentPopulation;
            myP3.textContent = "Average Rainfall: " + town[i].averageRainfall;

            divtown.appendChild(myH3);
            divtown.appendChild(myH4);
            divtown.appendChild(myP1);
            divtown.appendChild(myP2);
            divtown.appendChild(myP3);

            output.appendChild(divtown);
        }
    }
}


