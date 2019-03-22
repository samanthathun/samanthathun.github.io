let eventoutput = document.querySelector('section.eventspreston');

let prestonrequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let prestonrequest = new XMLHttpRequest();
prestonrequest.open('GET', prestonrequestURL);
prestonrequest.responseType = 'json';
prestonrequest.send();

prestonrequest.onload = function () {
    let prestondata = prestonrequest.response;

    let preston = prestondata['towns'];

    for (let i = 0; i < preston.length; i++) {

        if (preston[i].name == "Preston") {

            let listpreston = document.createElement('ul');
            listpreston.setAttribute('class', 'eventarticle');

            let list1 = preston[i].events;

            for (let j = 0; j < list1.length; j++) {

                let listitem = document.createElement('li');
                listitem.textContent = list1[j];

                listpreston.appendChild(listitem);
                document.getElementById('events').appendChild(listpreston);
            }


        }
    }

}