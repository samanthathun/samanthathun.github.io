let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b3f937ac836b548fdae15d52ba76d87b";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {

    let weatherData = JSON.parse(weatherRequest.responseText);
//console.log(weatherData);
document.getElementById("currently").innerHTML=weatherData.weather[0].description;
document.getElementById("temp").innerHTML=weatherData.main.temp_max;
document.getElementById("humidity").innerHTML=weatherData.main.humidity;
document.getElementById("wind").innerHTML=weatherData.wind.speed;

let wind = parseInt(weatherData.wind.speed, 10);
let temp = parseInt(weatherData.main.temp_max, 10);

windchill(wind, temp);



}