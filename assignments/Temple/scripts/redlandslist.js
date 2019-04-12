let output = document.querySelector('div.fourtowns');

let requestURL = 'https://samanthathun.github.io/assignments/Temple/temple.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let towndata = request.response;

    let town = towndata['towns'];
    
    for (let i = 0; i < town.length; i++) {

        if (town[i].name == "Redlands") {

            let divtown = document.createElement('ul');
            divtown.setAttribute('class', 'townbox');



            let listred = town[i].services;

            for (let j = 0; j < listred.length; j++) {

                let myH1 = document.createElement('h2');
                let myH2 = document.createElement('h4');
                let myH3 = document.createElement('h4');
                let myP1 = document.createElement('li');
                let myP2 = document.createElement('li');
                let myP3 = document.createElement('li');
                let myP4 = document.createElement('li');
                let myP5 = document.createElement('li');
                let myP6 = document.createElement('li');
                let myP7 = document.createElement('li');

                myH1.textContent = town[i].name;
                myH2.textContent = town[i].address;
                myH3.textContent = town[i].telephone;
                myP1.textContent = "Services: " + town[j].services;
                myP2.textContent = "History: " + town[j].history;
                myP3.textContent = "Baptistry Schedule: " + town[j].baptism;
                myP4.textContent = "Initiatory Schedule: " + town[j].initiatory;
                myP5.textContent = "Endowment Schedule " + town[j].endowment;
                myP6.textContent = "Sealing Schedule " + town[j].sealing;
                myP7.textContent = "Temple Closure Schedule " + town[j].templeclosureschedule;

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



                document.getElementById('events').appendChild(divtown);

            }
        }
    }
}