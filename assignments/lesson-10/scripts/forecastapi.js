let forecastRequest = new XMLHttpRequest();
let forecastURLstring = "api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b3f937ac836b548fdae15d52ba76d87b";
forecastRequest.open("Get", forecastURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {

    let forecastData = JSON.parse(forecastRequest.responseText);
console.log(forecastData);
document.getElementById("current-temp").innerHTML=forecastData.main.temp;

//let icon = "http://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png";
//let desc = "forecastData.weather[0].descripion";

//document.getElementById("cc-img").setAttribute('src', icon);
//document.getElementById("cc-img").setAttribute('alt', desc);



}