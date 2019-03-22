let forecastRequest = new XMLHttpRequest();
let forecastURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5678757&units=imperial&APPID=b3f937ac836b548fdae15d52ba76d87b";
forecastRequest.open("Get", forecastURLstring, true);
forecastRequest.send();

forecastRequest.onload = function () {

    let forecastData = JSON.parse(forecastRequest.responseText);

    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    for (i = 1; i <= 5; i++) {
        var n = weekday[(day.getDay() + i) % 7];
        document.getElementById("forecastday" + i).innerHTML = n;

    }
    let hightempforecast = [];
    let counter = 0;
    let images = [];

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.match(/18:00:00/)) {
            hightempforecast[counter] = forecastData.list[i].main.temp;
            images[counter] = forecastData.list[i].weather[0].icon;
            counter++;
            document.getElementById("cc-img" + counter).setAttribute('alt', forecastData.list[i].weather[0].description);
        }
    }

    for (let i = 1; i <= 5; i++) {

        document.getElementById('current-temp' + i).innerHTML = hightempforecast[i - 1].toFixed(1);
        let icon = "http://openweathermap.org/img/w/" + images[i - 1] + ".png";

        document.getElementById("cc-img" + i).setAttribute('src', icon);

    }
}