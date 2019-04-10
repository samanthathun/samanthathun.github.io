let output = document.querySelector('div.fourtowns');

let requestURL = 'https://samanthathun.github.io/assignments/Temple/temple.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;

    let town = towndata['towns'];
    console.log(town);
    for (let i = 0; i < town.length; i++) {

        if (town[i].name == "Redlands" || town[i].name == "Newport Beach") {
            let divtown = document.createElement('div');
            divtown.setAttribute('class', 'townbox');
            let myH1 = document.createElement('h2');
            let myH2 = document.createElement('h4');
            let myH3 = document.createElement('h4');
            let myP1 = document.createElement('p');
            let myP2 = document.createElement('p');
            let myP3 = document.createElement('p');
            let myP4 = document.createElement('p');
            let myP5 = document.createElement('p');
            let myP6 = document.createElement('p');
            let myP7 = document.createElement('p');

            myH1.textContent = town[i].name;
            myH2.textContent = town[i].address;
            myH3.textContent = town[i].telephone;
            myP1.textContent = "Services: " + town[i].services;
            myP2.textContent = "History: " + town[i].history;
            myP3.textContent = "Baptistry Schedule: " + town[i].baptism;
            myP4.textContent = "Initiatory Schedule: " + town[i].initiatory;
            myP5.textContent = "Endowment Schedule " + town[i].endowment;
            myP6.textContent = "Sealing Schedule " + town[i].sealing;
            myP7.textContent = "Temple Closure Schedule " + town[i].templeclosureschedule;

            divtown.appendChild(myH1);
            divtown.appendChild(myH2);
            divtown.appendChild(myH3);
            divtown.appendChild(myP1);
            divtown.appendChild(myP2);
            divtown.appendChild(myP3);
            divtown.appendChild(myP4);
            divtown.appendChild(myP5);
            divtown.appendChild(myP6);
            divtown.appendChild(myP7);

            output.appendChild(divtown);

        }
    }
}