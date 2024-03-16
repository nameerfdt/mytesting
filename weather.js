// const day1Forecast = document.querySelector('#day1Temp');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetchFuture(){
    try{
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forecastData = await response.json();
            displayFuture(forecastData);
            console.log(forecastData)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}
apiFetchFuture()

function displayFuture(data){
    for (let i = 0; i < data.list.length; i ++){    
        const forecast = data.list[i];
        if(forecast.dt_txt.includes('21:00')){
            const day1Temp = document.querySelector('#day1Temp');
            const day1Desc = document.querySelector('#day1Desc');
            const day1Icon = document.querySelector('#day1Icon');

            day1Temp.textContent = `${forecast.main.temp.toFixed(0)} F`;
            day1Desc.textContent = capitalize(forecast.weather[0].description);
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            day1Icon.setAttribute('src', iconUrl);

            const day2Temp = document.querySelector('#day2Temp');
            const day2Desc = document.querySelector('#day2Desc');
            const day2Icon = document.querySelector('#day2Icon');

            day2Temp.textContent = `${forecast.main.temp.toFixed(0)} F`;
            day2Desc.textContent = capitalize(forecast.weather[i + 8].description);
            const day2iconCode = forecast.weather[i + 8].icon;
            const day2iconUrl = `https://openweathermap.org/img/wn/${day2iconCode}.png`;
            day2Icon.setAttribute('src', day2iconUrl);

            break;
        }    
    }

}
    function capitalize(str) {
        return str.replace(/\b\w/g, function(char){
            return char.toUpperCase();
        })
}