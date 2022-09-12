// Weather API Notes: 
// Source: https://www.weatherbit.io/

//https://api.weatherbit.io/v2.0/current?
// lat=35.7796
// &lon=-78.6382
// &key=API_KEY

// -- API Key --
// 0632122ec59f467cb1b46c3567c0b3b0

// https://api.weatherbit.io/v2.0/current?lat=38.8894&lon=-77.0352&key=0632122ec59f467cb1b46c3567c0b3b0


// https://api.weatherbit.io/v2.0/current?&city=washington,DC&key=0632122ec59f467cb1b46c3567c0b3b0
// &city=Raleigh,NC
// &city=washington,DC
// Other options 
// &city=Raleigh&country=US
// &city=Raleigh,NC
// &city=Raleigh,North+Carolina

// Using postal code
// &postal_code=20001
// https://api.weatherbit.io/v2.0/current?&postal_code=20001&key=0632122ec59f467cb1b46c3567c0b3b0



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

    // const API_URL = "https://api.kanye.rest";

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log(weather);

    return weather; 
}


async function getCurrentWeatherCityName(cityName) {

    const API_URL = `https://api.weatherbit.io/v2.0/current?&city=${cityName}&key=0632122ec59f467cb1b46c3567c0b3b0`;

    // const API_URL = "https://api.kanye.rest";

    const response = await fetch(API_URL);

    const weather = await response.json(); 

    console.log('City Name method');

    console.log(weather);

    return weather; 
}

