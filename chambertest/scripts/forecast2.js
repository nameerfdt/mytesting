const day1Temp = document.querySelector('#day1Temp');
const day1icon = document.querySelector('#day1icon');
const day1desc = document.querySelector('#day1desc');
const day2Temp = document.querySelector('#day2Temp'); // Corrected selector
const day2icon = document.querySelector('#day2icon'); // Corrected selector
const day2desc = document.querySelector('#day2desc'); // Corrected selector
const day3Temp = document.querySelector('#day3Temp'); // Corrected selector
const day3icon = document.querySelector('#day3icon'); // Corrected selector
const day3desc = document.querySelector('#day3desc'); // Corrected selector

const apiid = 'c5c228cf26f7fad6c4c81bd04c1890f7';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=38.68&lon=-121.15&units=imperial&appid=${apiid}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=40&units=imperial&appid=${apiid}`;

async function apiFetch() {
    try {
        // Fetch current weather data
        const currentResponse = await fetch(currentWeatherURL);
        const currentData = await currentResponse.json();
        
        // Fetch forecast data
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();
        
        // Display forecast
        displayForecast(forecastData);
        console.log(forecastData);

    } catch (error) {
        console.log(error);
    }
}

function displayForecast(forecast) {
    day1Temp.innerHTML = `${forecast.list[6].main.temp} °F`;

    const day1iconsrc = `https://openweathermap.org/img/wn/${forecast.list[6].weather[0].icon}@2x.png`;
    const day1iconImg = document.createElement('img'); // Corrected variable name
    day1iconImg.src = day1iconsrc;
    day1iconImg.alt = forecast.list[6].weather[0].description;
    day1icon.innerHTML = ''; // Clear existing content
    day1icon.appendChild(day1iconImg);

    day1desc.textContent = forecast.list[6].weather[0].description;


    day2Temp.innerHTML = `${forecast.list[14].main.temp} °F`;

    const day2iconsrc = `https://openweathermap.org/img/wn/${forecast.list[14].weather[0].icon}@2x.png`;
    const day2iconImg = document.createElement('img'); // Corrected variable name
    day2iconImg.src = day2iconsrc;
    day2iconImg.alt = forecast.list[14].weather[0].description;
    day2icon.innerHTML = ''; // Clear existing content
    day2icon.appendChild(day2iconImg);

    day2desc.textContent = forecast.list[14].weather[0].description; // Corrected variable name

    const day3iconsrc = `https://openweathermap.org/img/wn/${forecast.list[22].weather[0].icon}@2x.png`;
    const day3iconImg = document.createElement('img'); // Corrected variable name
    day3iconImg.src = day3iconsrc;
    day3iconImg.alt = forecast.list[22].weather[0].description;
    day3icon.innerHTML = ''; // Clear existing content
    day3icon.appendChild(day3iconImg);

    day3desc.textContent = forecast.list[22].weather[0].description; // Corrected variable name


}

apiFetch();
