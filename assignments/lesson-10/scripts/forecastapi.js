let forecastRequest = new XMLHttpRequest();
let forecastURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b3f937ac836b548fdae15d52ba76d87b";
forecastRequest.open("Get", forecastURLstring, true);
forecastRequest.send();

forecastRequest.onload = function () {

    let forecastData = JSON.parse(forecastRequest.responseText);
    //console.log(forecastData);

    let hightempforecast = [];
    let counter = 0;
    //let hour;
    for (let i = 0; i < forecastData.list.length; i++) {
        if (counter.dt_text == '18:00:00') {
            hightempforecast[counter] = main.temp;

        counter++

        }

        for (let i = 0; i <= 5; i++) {
            document.getElementById('current-temp').innerHTML = hightempforecast[i];


        }


        //let icon = "http://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png";
        //let desc = "forecastData.weather[0].descripion";

        //document.getElementById("cc-img").setAttribute('src', icon);
        //document.getElementById("cc-img").setAttribute('alt', desc);

    }

}