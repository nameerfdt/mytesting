
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.68&lon=-121.15&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';


// define an asynchronous function name "apiFetch()" that uses a try block to handle errors
async function apiFetch(){
    try{
        // store the results of the URL fetch into a variable named response
        const response = await fetch(url);
        // if the response if OK, then store the result of response.json() converstion in a variable named data and output the results to the console for testing.
        if (response.ok) {
            // const data = await response.json();
            const today = await response.json();
            console.log(today);
            // displayResults(data);
            displayResults(today)
        // else thrown an Error using the response.text()
        } else {
            throw Error(await response.text());
        }
    // finish off the catch block by outputting any try error to the console.  
    } catch (error) {
        console.log(error);
    } 
}
// invoke the apiFetch() function
apiFetch()

// START THIS WORKS FOR SINGLE DAY AND
// UNCOMMENTED LINES GET INFO 

// displyResults function to output to the given HTML document
// function displayResults(data){
function displayResults(today){
        currentTemp.innerHTML =`${today.main.temp.toFixed(0)}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`;

        let desc = capitalize(today.weather[0].description);
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;

        const windSpeed = document.querySelector('#windSpeed');
        windSpeed.textContent = `${today.wind.speed.toFixed(0)}`;
        

        function calculateWindChill(currentTemp, windspeed) {
            if (currentTemp <= 50 && windspeed > 3.0) {
                const windchill = 34.74 + (0.6215 * currentTemp) - (35.75 * windspeed ** 0.16) + (0.4275 * currentTemp * (windspeed ** 0.16))
                return windchill.toFixed(2);
            } else {
                return "N/A";
            }
        }
        const windchill = calculateWindChill(today.main.temp, today.wind.speed);
        document.getElementById("windChill").innerText = windchill;
}
        
function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}