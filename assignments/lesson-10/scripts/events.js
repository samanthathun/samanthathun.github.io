let eventoutput = document.querySelector('section.eventspreston');


let prestonrequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let prestonrequest = new XMLHttpRequest();
prestonrequest.open('GET', prestonrequestURL);
prestonrequest.responseType = 'json';
prestonrequest.send();

prestonrequest.onload = function () {
    let prestondata = prestonrequest.response;

    let preston = prestondata['towns'];
    console.log(preston);
    for (let i = 0; i < preston.length; i++) {

        if (preston[i].name == "Preston") {
            let paragraphpreston = document.createElement('section');
            paragraphpreston.setAttribute('class', 'eventarticle');

            let p1 = document.createElement('p');

            p1.textContent = preston[i].events;

            paragraphpreston.appendChild(p1);

            eventoutput.appendChild(paragraphpreston);

        }
    }
}