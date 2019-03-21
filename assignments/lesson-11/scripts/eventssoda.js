let eventoutput = document.querySelector('section.eventssodasprings');


let ssrequestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let ssrequest = new XMLHttpRequest();
ssrequest.open('GET', ssrequestURL);
ssrequest.responseType = 'json';
ssrequest.send();

ssrequest.onload = function () {
    let ssdata = ssrequest.response;

    let ss = ssdata['towns'];

    for (let i = 0; i < ss.length; i++) {

        if (ss[i].name == "Soda Springs") {

            let listss = document.createElement('ul');
            listss.setAttribute('class', 'eventarticle');

            let list1 = ss[i].events;
            
            for (let j = 0; j < list1.length; j++) {

                let listitem = document.createElement('li');
                listitem.textContent = list1[j];

                listss.appendChild(listitem);
                document.getElementById('events').appendChild(listss);
            }

            
        }
    }

}