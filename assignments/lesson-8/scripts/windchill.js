
    let temp = parseFloat(document.getElementById("temp").innerText);
    let wind = parseFloat(document.getElementById("wind").innerText);
    let result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind,0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

document.getElementById ("outputDiv").innerHTML = result.toFixed(1);