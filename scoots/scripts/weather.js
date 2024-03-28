// 20.51 -86.95

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const today = await response.json();
            displayResults(today)
            console.log(today)
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    } 
}

apiFetch()

function displayResults(today){
        currentTemp.innerHTML =`${today.main.temp.toFixed(0)}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`;

        let desc = capitalize(today.weather[0].description);
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;
        
        const humidity = document.querySelector('#humidity');
        humidity.textContent = `${today.main.humidity}`;

        const windSpeed = document.querySelector('#windSpeed');
        windSpeed.textContent = `${today.wind.speed.toFixed(0)}`;
    }

function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}