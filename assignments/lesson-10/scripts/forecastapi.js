let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b3f937ac836b548fdae15d52ba76d87b";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {

    let weatherData = JSON.parse(weatherRequest.responseText);
//console.log(weatherData);
document.getElementById("current-temp").innerHTML=weatherData.main.temp;

let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
let desc = "weatherData.weather[0].descripion";

document.getElementById("cc-img").setAttribute('src', icon);
document.getElementById("cc-img").setAttribute('alt', desc);



}