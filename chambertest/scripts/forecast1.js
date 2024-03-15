
// this gets the weather for 5 days
// const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

// const day1 = document.querySelector('#futureDay1')
// const day1icon= document.querySelector('futureDay1icon');

// async function apiFetch(){
//     try{
//         const response = await fetch(forecastURL);
//         if (response.ok) {
//             const data = await response.json();
//             //console.log(data);
//             displayResults(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     } 
// }
// apiFetch();

// const future = document.getElementById(`futureforecast`);

// const displayResults = (forecast) => {
//     forecast.forEach((day) => {
//         const card = document.createElement('section');
//         const temp = document.createElement('p');
//         temp.textContent = `Day 1${forecast.list[6].main.temp}`;
//     })
//         card.appendChild(temp);
//     future.appendChild(card);
// }

// function displayResults(forecast) {
//     const future = document.getElementById('futureforecast');

//     forecast.list.forEach((day, index) => {
//         if (index % 8 === 6) { // Forecast data available every 3 hours, so we select every 8th item for each day
//             const card = document.createElement('section');
//             const temp = document.createElement('p');
//             // temp.textContent = `Day ${index / 8 + 1}: ${day.main.temp} °F`; // Display temperature for the day
//             temp.textContent = `Day: ${day.main.temp} °F`; // Display temperature for the day
//             card.appendChild(temp);
//             future.appendChild(card);
//         }
//     });
// }


// function displayResults(forecast) {
//     const future = document.getElementById('futureforecast');

//     let dayIndex = 1;
//     for (let i = 6; i < forecast.list.length; i += 8) {
//         const day = forecast.list[i];
        
//         const card = document.createElement('section');
//         const temp = document.createElement('p');
//         temp.textContent = `Day ${dayIndex}: ${day.main.temp.toFixed(0)} °F`; // Display temperature for the day

//         const desc = document.createElement('p');
//         desc.textContent = `Description: ${day.weather[0].description}`; // Display weather description
//         card.appendChild(desc);

//         const icon = document.createElement('img');
//         icon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
//         icon.alt = day.weather[0].description;
//         icon.classList.add('weather-icon'); // Add a class for styling

        // tempDesc.textContent = `Day ${dayIndex}: ${day.main.temp.toFixed(0)} °F, ${day.weather[0].description}`;
        
        // Append icon, temperature, and description to the paragraph element
        // tempDesc.appendChild(icon);
        
        // // Append paragraph element to the card
        // card.appendChild(tempDesc);
        
        // // Append card to the future forecast container
        // future.appendChild(card);

        // dayIndex++;


//         card.appendChild(temp) ;
//         future.appendChild(card);

//         dayIndex++;
//     }
// }

// function displayResults(data){
//     const card = document.createElement('section');
//     for (let i = 6; i < data.list.length; i +=8){

//         const forecast = data.list[i];

//         const tempElement = document.createElement('p');
//         tempElement.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

//         const dateElement = document.createElement('p');
//         dateElement.innerHTML = `Forecast for: ${forecast.dt_txt}`;

//         const iconElement = document.createElement('img');
//         const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
//         iconElement.setAttribute('src', iconsrc);

//         const descElement = document.createElement('p');
//         let desc = capitalize(forecast.weather[0].description);
//         descElement.textContent = desc;

//         // Append each forecast entry to the respective container element
//         card.appendChild(dateElement);
//         card.appendChild(tempElement);
//         card.appendChild(iconElement);
//         card.appendChild(descElement);
//         document.getElementById('future-forecast').appendChild(card);
//     }
// }

// function capitalize(str) {
//     return str.replace(/\b\w/g, function(char){
//         return char.toUpperCase();
//     })
// }





// 

// const apikey = 'c5c228cf26f7fad6c4c81bd04c1890f7';

const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=38.68&lon=-121.15&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7`;

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

        // Display forecast
        displayForecast(forecastData);
    } catch (error) {
        console.log(error);
    }
}
apiFetch()

function displayCurrentTemperature(data) {
    const currentTemp = document.getElementById('current-temperature');
    currentTemp.textContent = `Current Temperature: ${data.main.temp.toFixed(0)} °F`;
}

function displayForecast(forecast) {
    // function displayResults(forecast) {
    const future = document.getElementById('futureforecast');

    let dayIndex = 1;
    for (let i = 6; i < forecast.list.length; i += 8) {
        const day = forecast.list[i];
        
        const card = document.createElement('section');
        const temp = document.createElement('p');
        temp.textContent = `Day ${dayIndex}: ${day.main.temp.toFixed(0)} °F`; // Display temperature for the day

        const desc = document.createElement('p');
        desc.textContent = `Description: ${day.weather[0].description}`; // Display weather description
        card.appendChild(desc);

        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        icon.alt = day.weather[0].description;
        icon.classList.add('weather-icon'); // Add a class for styling

        card.appendChild(temp);
        card.appendChild(icon)
        future.appendChild(card);

    dayIndex++;
}
}

