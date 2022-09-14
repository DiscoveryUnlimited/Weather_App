//  Establish import for weather and image functions
import { getCurrentWeather } from "./weather-helper-functions.js";

import { findWeatherImg } from "./image-helper-functions.js";

const defaultImg =
  "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80";

//const defaultZipCode = 27519;
const locationInput = 27519;
// Weather call
let weather = await getCurrentWeather(locationInput);

//to create a card under id"card_container" to contain the display section.
const card = document.createElement("div"); //card_container=>card & img; card=>(location, tem)
card.setAttribute("class", "card");
card.setAttribute("style", "background-color: #faf1f1;");
card.style.height = "fit-content";
card.style.margin = "15px;";

const cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");

//create location display
const locationDisplay = document.createElement("h5");
locationDisplay.setAttribute("class", "card-title");
locationDisplay.setAttribute("id", "card-title");
locationDisplay.innerText = locationInput;
cardBody.appendChild(locationDisplay);
card.appendChild(cardBody);

//Temperature Display
const temperature = weather.data[0].temp;
const tempDisplay = document.createElement("h6");
tempDisplay.setAttribute("class", "card-subtitle mb-2 text-muted");
// TODO
tempDisplay.innerText = temperature;
cardBody.appendChild(tempDisplay);
console.log(temperature);
//Weather Condition
const condition = weather.data[0].weather.description;
const weaConDisplay = document.createElement("p");
weaConDisplay.setAttribute("class", "card-text");
// TODO
weaConDisplay.innerText = condition;
cardBody.appendChild(weaConDisplay);

const imgDisplay = document.createElement("img");
imgDisplay.setAttribute("class", "card-img-top");
imgDisplay.setAttribute("id", "image");
imgDisplay.setAttribute("src", defaultImg);
cardBody.appendChild(imgDisplay);

//searchable condition and update image
var words = condition.split(" ");
//console.log(words.length);
if (words.length > 1) {
  var search = words[0];
  //console.log(search);
  for (var i = 1; i <= words.length - 1; i++) {
    //console.log(i);
    let word = words[i];

    let wordPlus = "+" + word;
    search += wordPlus;
  }

  findWeatherImg(search);
}

document.getElementById("card_container").appendChild(card);

// update a card using input from location field
document
  .getElementById("input_container")
  .addEventListener("submit", async (evt) => {
    evt.preventDefault();

    //location. temperature, weather condition, weather condition img.
    //grab user inputs(location) from the input_container, and store it in variables.
    let locationInput = document.getElementById("user_input").value;
    console.log(locationInput);
    // Weather call
    let weather = await getCurrentWeather(locationInput); //TODO

    //create location display
    //locationDisplay.innerText = locationInput;
    document.getElementById("card-title").innerText = locationInput;

    //Temperature Display
    let temperature = weather.data[0].temp;
    document.getElementsByClassName("card-subtitle").innerText = temperature;
    //console.log(temperature);
    tempDisplay.innerText = temperature;
    //Weather Condition
    let condition = weather.data[0].weather.description;
    //weaConDisplay.innerText = condition;
    document.getElementsByClassName("card-text").innerText = condition;
    weaConDisplay.innerText = condition;
    //searchable condition and update image
    var words = condition.split(" ");
    console.log(words.length);
    if (words.length > 1) {
      var search = words[0];
      //console.log(search);
      for (var i = 1; i <= words.length - 1; i++) {
        //console.log(i);
        let word = words[i];

        let wordPlus = "+" + word;
        search += wordPlus;
      }

      findWeatherImg(search);
    }
    document.getElementById("search_bar").reset();
  });
