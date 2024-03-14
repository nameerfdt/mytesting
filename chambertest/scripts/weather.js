
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const date = document.querySelector(`#weather-date`);

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.68&lon=-121.15&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

// this gets the weather for 5 days
// const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

// define an asynchronous function name "apiFetch()" that uses a try block to handle errors
async function apiFetch(){
    try{
        // store the results of the URL fetch into a variable named response
        const response = await fetch(url);
        // if the response if OK, then store the result of response.json() converstion in a variable named data and output the results to the console for testing.
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
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
function displayResults(data){
        currentTemp.innerHTML =`${data.main.temp.toFixed(0)}&deg;F`;
        // data.weather[0].icon is for the first element in the data.weather array for the icon to display
        // date.innerHTML = `${data.list[0].dt_txt}`;
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = capitalize(data.weather[0].description);
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;
    // }
        // const card = document.createElement('section');
        // for (let i = 8; i < data.list.length; i +=8){

        //     const forecast = data.list[i];

        //     const tempElement = document.createElement('div');
        //     tempElement.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

        //     const dateElement = document.createElement('div');
        //     dateElement.innerHTML = `Forecast for: ${forecast.dt_txt}`;

        //     const iconElement = document.createElement('img');
        //     const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        //     iconElement.setAttribute('src', iconsrc);

        //     const descElement = document.createElement('div');
        //     let desc = capitalize(forecast.weather[0].description);
        //     descElement.textContent = desc;

        //     // Append each forecast entry to the respective container element
        //     card.appendChild(dateElement);
        //     card.appendChild(tempElement);
        //     card.appendChild(iconElement);
        //     card.appendChild(descElement);
        //     document.getElementById('future-forecast').appendChild(card);
        // }




function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}
}