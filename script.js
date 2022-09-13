//  Establish import for weather and image functions
import { getCurrentWeather } from "./weather-helper-functions.js";

import { findWeatherImg } from "./image-helper-functions.js";

// Update Main JS to create a card using input from location field
document.getElementById("input_container").addEventListener("submit", (evt) => {
  evt.preventDefault();

  //document.getElementById("input_container").reset();

  //location. temperature, weather condition, weather condition img.
  //grab user inputs(location) from the input_container, and store it in variables.
  const locationInput = document.getElementById("input_container").value; //TODO change the ID.

  //to create a card under id"card_container" to contain the display section.
  const card = document.createElement("div"); //card_container=>card & img; card=>(location, tem)
  card_container.appendChild(card);

  //create location display
  const locationDisplay = document.createElement("h5");
  card.appendChild(locationDisplay);
  locationDisplay.setAttribute("id", "location_display");
  // locationDisplay.innerText=  TODO

  const tempDisplay = document.createElement("h6");
  card.appendChild(tempDisplay);
  tempDisplay.setAttribute("id", "temperature_display");

  const weaConDisplay = document.createElement("p");
  card.appendChild(weaConDisplay);
  weaConDisplay.setAttribute("id", "weather_condition_display");

  const imgDisplay = document.createElement("img");
  card_container.appendChild(imgDisplay);
  imgDisplay.setAttribute("src", ""); //TODO
  imgDisplay.setAttribute("id", "image");
  // findWeatherImg(); //TODO
});
