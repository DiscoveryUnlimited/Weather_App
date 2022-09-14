


export function testGetWeatherIconFunction(weatherCode) {

    debugger; 

    const WEATHER_ICON_URL = getWeatherIcon(weatherCode); 
    console.log(`Weather icon url: ${WEATHER_ICON_URL}`);
    // const THUNDERSTORM_URL = getWeatherIcon("200");
    // console.log(THUNDERSTORM_URL);
    // const CLEAR_SKY_URL = getWeatherIcon("800");
    // console.log(CLEAR_SKY_URL);
    
    const cardBody = document.getElementById("card-title")
    cardBody.classList.add("d-flex", "justify-content-between"); 
    const imgDisplay = document.createElement("img");
    imgDisplay.setAttribute("height", "50px");
    imgDisplay.setAttribute("width", "50px");
    imgDisplay.setAttribute("id", "weather_icon");
    imgDisplay.setAttribute("src", WEATHER_ICON_URL);
    cardBody.appendChild(imgDisplay);

}


/* 
    This function takes a weather icon code and returns 
    a url to the image of the weather icon.
*/
export function getWeatherIcon(iconCode) {

    // Set our icon code to a default of a sun and cloud
    let iconURL = "https://www.weatherbit.io/static/img/icons/c02d.png"; 

    // Get our icon map 
    const iconMap = createWeatherCodeMap(); 

    // Check if our icon code is included in our map
    if(iconMap.has(iconCode)) {
        iconURL = iconMap.get(iconCode); 
    } else {
        // If we get an invalid code, then log it to console for troubleshooting
        console.log(`Error: ${iconCode} is an invalid icon code`);
    }
    // Return the icon URL
    return iconURL; 
}

/*
    This function creates a map with icon codes as the key 
    and a URL as the value.
*/
function createWeatherCodeMap(){

    // Create our hashmap linking codes to their image url
    const ICON_MAP = new Map();

    // Thunderstorm icons
    ICON_MAP.set("200", "https://www.weatherbit.io/static/img/icons/t01d.png");
    ICON_MAP.set("201", "https://www.weatherbit.io/static/img/icons/t02d.png");
    ICON_MAP.set("202", "https://www.weatherbit.io/static/img/icons/t03d.png");
    ICON_MAP.set("230", "https://www.weatherbit.io/static/img/icons/t04d.png");
    ICON_MAP.set("231", "https://www.weatherbit.io/static/img/icons/t04d.png");
    ICON_MAP.set("232", "https://www.weatherbit.io/static/img/icons/t04d.png");
    ICON_MAP.set("233", "https://www.weatherbit.io/static/img/icons/t05d.png");
    // Drizzle icons
    ICON_MAP.set("300", "https://www.weatherbit.io/static/img/icons/d01d.png");
    ICON_MAP.set("301", "https://www.weatherbit.io/static/img/icons/d01d.png");
    ICON_MAP.set("302", "https://www.weatherbit.io/static/img/icons/d01d.png");
    // Rain icons
    ICON_MAP.set("500", "https://www.weatherbit.io/static/img/icons/r01d.png");
    ICON_MAP.set("501", "https://www.weatherbit.io/static/img/icons/r02d.png");
    ICON_MAP.set("502", "https://www.weatherbit.io/static/img/icons/r03d.png");
    ICON_MAP.set("511", "https://www.weatherbit.io/static/img/icons/f01d.png");
    ICON_MAP.set("520", "https://www.weatherbit.io/static/img/icons/r04d.png");
    ICON_MAP.set("521", "https://www.weatherbit.io/static/img/icons/r05d.png");
    ICON_MAP.set("522", "https://www.weatherbit.io/static/img/icons/r06d.png");
    // Snow icons
    ICON_MAP.set("600", "https://www.weatherbit.io/static/img/icons/s01d.png");
    ICON_MAP.set("601", "https://www.weatherbit.io/static/img/icons/s02d.png");
    ICON_MAP.set("602", "https://www.weatherbit.io/static/img/icons/s03d.png");
    ICON_MAP.set("610", "https://www.weatherbit.io/static/img/icons/s04d.png");
    ICON_MAP.set("611", "https://www.weatherbit.io/static/img/icons/s05d.png");
    ICON_MAP.set("612", "https://www.weatherbit.io/static/img/icons/s05d.png");
    ICON_MAP.set("621", "https://www.weatherbit.io/static/img/icons/s01d.png");
    ICON_MAP.set("622", "https://www.weatherbit.io/static/img/icons/s02d.png");
    ICON_MAP.set("623", "https://www.weatherbit.io/static/img/icons/s06d.png");
    // Mist, smoke, haze, sand/dust, and fog icons
    ICON_MAP.set("700", "https://www.weatherbit.io/static/img/icons/a01d.png");
    ICON_MAP.set("711", "https://www.weatherbit.io/static/img/icons/a02d.png");
    ICON_MAP.set("721", "https://www.weatherbit.io/static/img/icons/a03d.png");
    ICON_MAP.set("731", "https://www.weatherbit.io/static/img/icons/a04d.png");
    ICON_MAP.set("741", "https://www.weatherbit.io/static/img/icons/a05d.png");
    ICON_MAP.set("751", "https://www.weatherbit.io/static/img/icons/a06d.png");
    // Clear sky and cloud icons
    ICON_MAP.set("800", "https://www.weatherbit.io/static/img/icons/c01d.png");
    ICON_MAP.set("801", "https://www.weatherbit.io/static/img/icons/c02d.png");
    ICON_MAP.set("802", "https://www.weatherbit.io/static/img/icons/c02d.png");
    ICON_MAP.set("803", "https://www.weatherbit.io/static/img/icons/c03d.png");
    ICON_MAP.set("804", "https://www.weatherbit.io/static/img/icons/c04d.png");
    // Unknown precipitation
    ICON_MAP.set("900", "https://www.weatherbit.io/static/img/icons/u00d.png");

    // Return our icon map
    return ICON_MAP; 
}