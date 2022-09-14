

const WEATHER_KEY = "59ce29faace24f609ceb1d6afcca5556";

export function testWeatherFunctions() {
    let inputData = prompt("Enter a zip or city name (e.g. Dallas,Tx):");

    debugger; 
    let currWeather = getCurrentWeather(inputData); 

    console.log(currWeather);
}

export async function testForecastFunction() {

    const lat = 30.2428;
    const lon = -97.7658;
    const city = "Austin"; 
    const postal = "78704"; 
    
    debugger; 
    
    // Because this is an async function it will the rest of the code will continue to execute
    // Thus, if we want to wait to hear back from this function we must declare the calling function
    // async and use the await keyword 
    const forecast_lat_lon = await getSevenDayForecast({ latitude:lat, longitude: lon});
    console.log(forecast_lat_lon);
  
    const forecast_city_name = await getSevenDayForecast({ cityName: city });
    console.log(forecast_city_name);
      
    const forecast_postal_code = await getSevenDayForecast({ postalCode: postal });
    console.log(forecast_postal_code);
    
    debugger; 
  
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

    const API_URL = `https://api.weatherbit.io/v2.0/current?&postal_code=${postalCode}&key=${WEATHER_KEY}`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log(weather);

    return weather; 
}


async function getCurrentWeatherCityName(cityName) {

    const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${cityName}&key=${WEATHER_KEY}`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log('City Name method');

    console.log(weather);

    return weather; 
}

export async function getCurrentWeatherLatLon(latitude, longitude) {

    const API_URL = `https://api.weatherbit.io/v2.0/current?&lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log('Lat and Lon method');

    console.log(weather);

    return weather; 

}

export async function getSevenDayForecast({ latitude, longitude, postalCode, cityName }) {

    let weather_arr = [];

    if(latitude && longitude) {
        // API call for lat and lon
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;

        console.log('Call seven day forecast with lat and lon');
            
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

    } else if (postalCode) {
        // API call for postal code
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${postalCode}&key=${WEATHER_KEY}`;

        console.log('Call seven day forecast with postal code'); 

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

    } else if (cityName) {
        // API call for city name
        let url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${WEATHER_KEY}`;

        console.log('Call seven day forecast with city name');

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

    } else {
        // If we don't get a valid argument then log an error and return an empty array
        console.log("Error: Invalid input!");
        return weather_arr; 
    }
 

    // Return our weather array
    return weather_arr; 
}