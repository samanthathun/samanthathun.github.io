let eventoutput = document.querySelector('article.eventspreston');


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

        if (preston[i].events == "Preston") {
            let paragraphpreston = document.createElement('p');
            paragraphpreston.setAttribute('class', 'eventarticle');

            paragraphpreston.textContent = preston[i].events;

            paragraphpreston.appendChild(paragraphpreston);

            output.appendChild(preston);

        }
    }
}