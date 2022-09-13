//  Establish import for weather and image functions
import { getCurrentWeather } from "./weather-helper-functions.js";

import { findWeatherImg } from "./image-helper-functions.js";

// Create a card using input from location field
document.getElementById("input_container").addEventListener("submit", (evt) => {
  evt.preventDefault();

  //document.getElementById("input_container").reset();

  //location. temperature, weather condition, weather condition img.
  //grab user inputs(location) from the input_container, and store it in variables.
  const locationInput = document.getElementById("input_container").value; //TODO change the ID.

  //to create a card under id"card_container" to contain the display section.
  const card = document.createElement("div"); //card_container=>card & img; card=>(location, tem)
  card.setAttribute("class", "card");
  card_container.appendChild(card);

  //create location display
  const locationDisplay = document.createElement("h5");
  locationDisplay.setAttribute("class", "card-title");
  // locationDisplay.innerText=  TODO
  card.appendChild(locationDisplay);

  const tempDisplay = document.createElement("h6");
  tempDisplay.setAttribute("class", "card-subtitle mb-2 text-muted");
  // tempDisplay.innerText=  TODO
  card.appendChild(tempDisplay);

  const weaConDisplay = document.createElement("p");
  weaConDisplay.setAttribute("class", "card-text");
  // weaConDisplay.innerText=  TODO
  card.appendChild(weaConDisplay);

  const imgDisplay = document.createElement("img");
  imgDisplay.setAttribute("class", "card-img-top");
  imgDisplay.setAttribute("id", "image");
  card_container.appendChild(imgDisplay);
  // findWeatherImg(); //TODO
});
