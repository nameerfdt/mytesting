
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
            const data = await response.json();
            // console.log(data);
            displayResults(data)
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

// displyResults function to output to the given HTML document
function displayResults(data){
    currentTemp.innerHTML =`${data.main.temp.toFixed(0)}&deg;F`;
    // data.weather[0].icon is for the first element in the data.weather array for the icon to display
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = capitalize(data.weather[0].description);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}