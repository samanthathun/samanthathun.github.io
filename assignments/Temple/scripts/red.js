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

            let list = document.createElement('ul');
            list.setAttribute('class', 'townbox');

            let list1 = town[i].services

            

            for (let j = 0; j < list1.length; j++) {

                let myP1 = document.createElement('li');
                let myP2 = document.createElement('li');

                myP1.textContent = list1[j];
                myP2.textContent = list2[j];

                list.appendChild(myP1);
                list.appendChild(myP2);
                
                document.getElementById('events').appendChild(list);
            }


        }
    }

}