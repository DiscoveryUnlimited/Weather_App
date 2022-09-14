//  Establish import for weather and image functions
import { getCurrentWeather, getCurrentWeatherLatLon } from "./weather-helper-functions.js";
import { findWeatherImg } from "./image-helper-functions.js";
import { getCurrentNews } from "./newsfeed-helper-functions.js";

// Default background image
const defaultImg =
  "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80";

// Geolocation function
navigator.geolocation.getCurrentPosition(success);

async function success(pos) {
  
  let latitude = pos.coords.latitude;
  let longitude = pos.coords.longitude;

  // Weather call
  var weather = await getCurrentWeatherLatLon(latitude, longitude);

  const locationInput = weather.data[0].city_name;
  
  // Create card
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("style", "background-color: #faf1f1;");
  card.style.height = "fit-content";
  card.style.margin = "15px;";

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  //create location display
  const locationDisplay = document.createElement("h5");
  locationDisplay.setAttribute("class", "card-title");
  locationDisplay.setAttribute("id", "card-title");
  locationDisplay.innerText = locationInput;
  cardBody.appendChild(locationDisplay);

  //Temperature Display
  const temperature = (((weather.data[0].temp)* (9/3))+ 32).toFixed(2);
  const tempDisplay = document.createElement("h6");
  tempDisplay.setAttribute("class", "card-subtitle mb-2 text-muted");
  tempDisplay.setAttribute("id", "card-subtitle");
  tempDisplay.innerText = temperature + " °F";
  cardBody.appendChild(tempDisplay);

  //Weather Condition
  const condition = weather.data[0].weather.description;
  const weaConDisplay = document.createElement("p");
  weaConDisplay.setAttribute("class", "card-text");
  weaConDisplay.setAttribute("id", "card-text"); 
  weaConDisplay.innerText = condition;
  cardBody.appendChild(weaConDisplay);

  // Image
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


  // Create news container
  // const newsContainer = document.createElement("div");
  // newsContainer.setAttribute("id", "news_container")
  // newsContainer.setAttribute("style", "padding: 15px; min-width: 40%; margin-top: 20px;");
  // document.body.children[1].appendChild(newsContainer);
  
  // Create card
  const newsCard = document.createElement("div");
  newsCard.setAttribute("class", "card");
  newsCard.setAttribute("id", "newsCard")
  newsCard.setAttribute("style", "margin-top: 15px; background-color: #faf1f1;");
  newsCard.style.height = "fit-content";
  newsCard.style.margin = "15px;";
  document.getElementById("card_container").appendChild(newsCard);

  // Create news card body
  const newsCardBody = document.createElement("div");
  newsCardBody.setAttribute("class", "card-body");
  newsCardBody.setAttribute("id", "news-card-body");
  newsCardBody.setAttribute("style", "max-width: 372px;");
  newsCard.appendChild(newsCardBody);

  // Create news title
  const newsTitile = document.createElement("h5");
  newsTitile.setAttribute("class", "card-title");
  newsTitile.setAttribute("id", "card-title");
  newsTitile.innerText = "Local News";
  document.getElementById("news-card-body").appendChild(newsTitile);

  // News
  let news = await getCurrentNews(locationInput);
  const newsText = document.createElement("p");
  newsText.setAttribute("class", "card-text");
  newsText.setAttribute("id", "news-text"); 
  newsText.innerText = news;
  document.getElementById("news-card-body").appendChild(newsText);
}


// Update weather card using input
document.getElementById('flexSwitchCheckDefault').addEventListener("change", forecast);

async function forecast(){
  let locationInput = document.getElementById("card-title").value;

  let weather = await getCurrentWeather(locationInput);
  let locationName = weather.data[0].city_name;


}


// Update weather card using input
document.getElementById("input_container").addEventListener("submit", async (evt) => {evt.preventDefault();

// Location from input
let locationInput = document.getElementById("user_input").value;
  
//No search for empty input
  if (locationInput.length > 0) {
    
    // Weather call
    let weather = await getCurrentWeather(locationInput);
    let locationName = weather.data[0].city_name;

    // Location Display
    document.getElementById("card-title").innerText = locationName;

    // Temperature Display
    let temperature = (((weather.data[0].temp)* (9/3))+ 32).toFixed(2);
    document.getElementById("card-subtitle").innerText = temperature + " °F";

    // Weather Condition
    let condition = weather.data[0].weather.description;
    document.getElementById("card-text").innerText = condition;

    // Searchable condition
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
      // Update Image
      findWeatherImg(search);
    }

    // News
    let news = await getCurrentNews(locationName);
    document.getElementById("news-text").innerText = news;

    // Reset input field
    document.getElementById("search_bar").reset();
  }
});
