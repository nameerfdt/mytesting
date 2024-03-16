let t = parseFloat(document.getElementById("temperature").innerText);
let w = parseFloat(document.getElementById("windSpeed").innerText);

// let t = 40;
// let w = 15;

function calculateWindChill(t, w) {
    if (t <= 50 && w > 3.0) {
    const windchill = 34.74 + (0.6215 * t) - (35.75 * w ** 0.16) + (0.4275 * t * (w ** 0.16))
    return windchill.toFixed(2);
    } else {
        return "N/A";
    }
}

const windchill = calculateWindChill(t, w);

document.getElementById("windChill").innerText = windchill;
