
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const date = document.querySelector(`#weather-date`);

// this gets the weather for 5 days
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}
apiFetch()

// START THIS WORKS FOR SINGLE DAY AND
// UNCOMMENTED LINES GET INFO 

function displayResults(data){
    const card = document.createElement('section');
    for (let i = 8; i < data.list.length; i +=8){

        const forecast = data.list[i];

        const tempElement = document.createElement('div');
        tempElement.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

        const dateElement = document.createElement('div');
        dateElement.innerHTML = `Forecast for: ${forecast.dt_txt}`;

        const iconElement = document.createElement('img');
        const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        iconElement.setAttribute('src', iconsrc);

        const descElement = document.createElement('div');
        let desc = capitalize(forecast.weather[0].description);
        descElement.textContent = desc;

        // Append each forecast entry to the respective container element
        card.appendChild(dateElement);
        card.appendChild(tempElement);
        card.appendChild(iconElement);
        card.appendChild(descElement);
    document.getElementById('weather').appendChild(card);
    }
}



function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}
