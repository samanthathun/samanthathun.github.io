let eventoutput = document.querySelector('section.eventsfishhaven');

let fhrequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let fhrequest = new XMLHttpRequest();
fhrequest.open('GET', fhrequestURL);
fhrequest.responseType = 'json';
fhrequest.send();

fhrequest.onload = function () {
    let fhdata = fhrequest.response;

    let fh = fhdata['towns'];

    for (let i = 0; i < fh.length; i++) {

        if (fh[i].name == "Fish Haven") {

            let listfh = document.createElement('ul');
            listfh.setAttribute('class', 'eventarticle');

            let list1 = fh[i].events;

            for (let j = 0; j < list1.length; j++) {

                let listitem = document.createElement('li');
                listitem.textContent = list1[j];

                listfh.appendChild(listitem);
                document.getElementById('events').appendChild(listfh);
            }


        }
    }

}