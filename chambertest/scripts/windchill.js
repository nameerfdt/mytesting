// Get the initial temperature and wind speed values from the HTML
const initialTemperature = parseInt(document.getElementById("temperature"));
const initialWindSpeed = parseInt(document.getElementById("windspeed"));


function calculateWindChill(Ta, v) {
    if (Ta <= 50 && v >= 3) {
        var Twc = 35.74 + 0.6215 * Ta - 35.75 * Math.pow(v, 0.16) + 0.4275 * Ta * Math.pow(v, 0.16);
        return Twc.toFixed(2);
    } else {
        return Ta;
    }
}

// Calculate the wind chill and update the temperature paragraph
const windChill = calculateWindChill(initialTemperature, initialWindSpeed);
document.getElementById("windchill").textContent = "Temperature: " + windChill + " (Wind Chill)";


