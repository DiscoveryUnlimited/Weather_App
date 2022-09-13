



export function testWeatherFunctions() {
    let inputData = prompt("Enter a zip or city name (e.g. Dallas,Tx):");

    debugger; 
    let currWeather = getCurrentWeather(inputData); 

    console.log(currWeather);
}


export function getCurrentWeather(inputData) {

    let weather; 

    // If is Not a Number, then call API with city name; otherwise, 
    // use the zip code 
    if(isNaN(inputData)) {
        weather = getCurrentWeatherCityName(inputData); 
    } else {
        weather = getCurrentWeatherZip(inputData); 
    }

    return weather; 
}


async function getCurrentWeatherZip(postalCode) {

    console.log('Zip method');

    const API_URL = `https://api.weatherbit.io/v2.0/current?&postal_code=${postalCode}&key=0632122ec59f467cb1b46c3567c0b3b0`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log(weather);

    return weather; 
}


async function getCurrentWeatherCityName(cityName) {

    const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${cityName}&key=0632122ec59f467cb1b46c3567c0b3b0`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log('City Name method');

    console.log(weather);

    return weather; 
}

export async function getCurrentWeatherLatLon(latitude, longitude) {

    const API_URL = `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=0632122ec59f467cb1b46c3567c0b3b0`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log('Lat and Lon method');

    console.log(weather);

    return weather; 

}

export async function getSevenDayForecast({ latitude, longitude, postalCode, cityName }) {

    let weather_arr = [];

    if(latitude && longitude) {
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=0632122ec59f467cb1b46c3567c0b3b0`;

        console.log('Call seven day forecast with lat and lon');

    } else if (postalCode) {
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${postalCode}&key=0632122ec59f467cb1b46c3567c0b3b0`;

        console.log('Call seven day forecast with postal code'); 

    } else if (cityName) {
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=0632122ec59f467cb1b46c3567c0b3b0`;

        console.log('Call seven day forecast with city name');

    } else{
        // If we don't get a valid argument then log an error and return an empty array
        console.log("Error: Invalid input!");
        return weather_arr; 
    }

    // Call the weather API
    const response = await fetch(url);

    // Convert response into a JSON object
    const weather = await response.json(); 
    console.log(weather.data);

    // If the array is greater than seven, grab the first seven elements
    if(weather.data.length > 7) {
        weather_arr = [...weather.data.slice(0,7)];
        console.log(weather_arr);
    }

    // Return our weather array
    return weather_arr; 
}