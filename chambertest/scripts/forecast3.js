const apiid = 'c5c228cf26f7fad6c4c81bd04c1890f7'; // Replace 'YOUR_API_KEY' with your actual API key

// Calculate the latitude and longitude for your desired location
const latitude = 38.68;
const longitude = -121.15;

// Construct the API URLs for current weather and forecast
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiid}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiid}`;

async function apiFetch() {
    try {
        // Fetch current weather data
        const currentResponse = await fetch(currentWeatherURL);
        const currentData = await currentResponse.json();
        
        // Fetch forecast data
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();
        
        // Display current temperature
        displayCurrentTemperature(currentData);

        // Display forecast for the next three days
        displayThreeDayForecast(forecastData);

    } catch (error) {
        console.log(error);
    }
}

function displayCurrentTemperature(data) {
    // Display current temperature in your HTML document
    const currentTemperature = document.getElementById('currentTemperature');
    currentTemperature.textContent = `Current Temperature: ${data.main.temp} °F`;
}

function displayThreeDayForecast(forecast) {
    // Clear any existing forecast data
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';

    // Loop through the forecast data and display the forecast for the next three days
    for (let i = 6; i < 3; i++) {
        const dayForecast = forecast.list[i * 8]; // Data for every 8th entry corresponds to a new day

        // Create elements to display the forecast data
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');

        const dateElement = document.createElement('p');
        dateElement.textContent = new Date(dayForecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperature: ${dayForecast.main.temp} °F`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${dayForecast.weather[0].description}`;

        // Append elements to the forecast container
        dayElement.appendChild(dateElement);
        dayElement.appendChild(temperatureElement);
        dayElement.appendChild(descriptionElement);
        forecastContainer.appendChild(dayElement);
    }
}

apiFetch();
