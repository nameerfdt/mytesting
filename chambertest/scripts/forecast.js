// this gets the weather for 5 days
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetch(){
    try{
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forecastURL = await response.json();
            displayResults(forecastURL);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}
apiFetch()


function displayResults(data){
    const card = document.createElement('section');
    for (let i = 6; i < data.list.length; i +=8){

        const forecast = data.list[i];

        const tempElement = document.createElement('p');
        tempElement.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

        const dateElement = document.createElement('p');
        dateElement.innerHTML = `Forecast for: ${forecast.dt_txt}`;

        const iconElement = document.createElement('img');
        const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        iconElement.setAttribute('src', iconsrc);

        const descElement = document.createElement('p');
        let desc = capitalize(forecast.weather[0].description);
        descElement.textContent = desc;

        // Append each forecast entry to the respective container element
        card.appendChild(dateElement);
        card.appendChild(tempElement);
        card.appendChild(iconElement);
        card.appendChild(descElement);
        document.getElementById('future-forecast').appendChild(card);
    }
}

function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}
