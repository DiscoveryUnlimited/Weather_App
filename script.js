//  Establish import for weather and image functions
import { getCurrentWeather, getCurrentWeatherLatLon, testForecastFunction, getSevenDayForecast} from "./weather-helper-functions.js";
import { findWeatherImg } from "./image-helper-functions.js";
import { getCurrentNews } from "./newsfeed-helper-functions.js";
import { getWeatherIcon } from "./weather-icons-helper.js";

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

  // Location name
  const locationInput = weather.data[0].city_name;
  
  //Weather Icon call
  var iconCode = (weather.data[0].weather.code).toString();
  var iconUrl = getWeatherIcon(iconCode);
  
  // Create card
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", "weather-card");
  card.setAttribute("style", "background-color: #faf1f1; display: flex; flex-direction: row; align-content: center;");
  card.style.height = "fit-content";
  card.style.margin = "15px;";

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  //create location display
  const locationDisplay = document.createElement("h5");
  locationDisplay.setAttribute("class", "card-title d-flex justify-content-between");
  locationDisplay.setAttribute("id", "card-title");
  locationDisplay.innerText = locationInput;
  cardBody.appendChild(locationDisplay);

  //Temperature Display
  const temperature = (((weather.data[0].temp)* (9/5))+ 32).toFixed(2);
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
  

  //searchable condition and update image
  var words = condition.split(" ");
  var search = words[0];

  
  for (var i = 1; i <= words.length - 1; i++) {
    //console.log(i);
    let word = words[i];

    let wordPlus = "+" + word;
    search += wordPlus;
  }
  let photo = await findWeatherImg(search);
  imgDisplay.setAttribute("src", photo);

  cardBody.appendChild(imgDisplay);

  document.getElementById("card_container").appendChild(card);

  // Weather Icon
  const iconImg = document.createElement("img");
  iconImg.setAttribute("height", "50px");
  iconImg.setAttribute("width", "50px");
  iconImg.setAttribute("id", "weather_icon");
  iconImg.setAttribute("src", iconUrl);
  document.getElementById("card-title").appendChild(iconImg);
  
  // Create card
  const newsCard = document.createElement("div");
  newsCard.setAttribute("class", "card");
  newsCard.setAttribute("id", "newsCard")
  newsCard.setAttribute("style", "margin-top: 15px; margin-bottom: 15px; background-color: #faf1f1;");
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




// Forecast
document.getElementById('flexSwitchCheckDefault').addEventListener("change", forecast);

async function forecast(){

  let checkBox = document.getElementById('flexSwitchCheckDefault');
  if (checkBox.checked) {

    var locationInput = document.getElementById("card-title").innerText;
    
    for (let j = 1; j <=3; j++) {
      console.log(j);

      let weather = await getSevenDayForecast({ cityName: locationInput });

      //Weather Icon call
      let iconCode = (weather[j].weather.code).toString();
      let iconUrl = getWeatherIcon(iconCode);

      let card = document.getElementById("weather-card");

      // Create card body
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      card.appendChild(cardBody);

      // Date Display
      let date = weather[j].datetime;
      let dateID = "date" + j.toString();
      const dateDisplay = document.createElement("h5");
      dateDisplay.setAttribute("class", "card-title d-flex justify-content-between");
      dateDisplay.setAttribute("id", dateID);
      dateDisplay.innerText = date;
      cardBody.appendChild(dateDisplay);

      // Temperature Display
      const temperature = (((weather[j].high_temp)* (9/5))+ 32).toFixed(2);
      const tempDisplay = document.createElement("h6");
      tempDisplay.setAttribute("class", "card-subtitle mb-2 text-muted");
      tempDisplay.innerText = "Highs: " + temperature + " °F";
      cardBody.appendChild(tempDisplay);

      // Weather Condition
      const condition = weather[j].weather.description;
      const weaConDisplay = document.createElement("p");
      weaConDisplay.setAttribute("class", "card-text");
      weaConDisplay.innerText = condition;
      cardBody.appendChild(weaConDisplay);

      // Image
      let imageID = "image" + j.toString();
      console.log("ID: " + imageID);
      const imgDisplay = document.createElement("img");
      imgDisplay.setAttribute("class", "card-img-top");
      imgDisplay.setAttribute("id", imageID);
      imgDisplay.setAttribute("src", defaultImg);
      cardBody.appendChild(imgDisplay);

      //searchable condition and update image
      var words = condition.split(" ");
      var search = words[0];

      for (var i = 1; i <= words.length - 1; i++) {
        //console.log(i);
        let word = words[i];

        let wordPlus = "+" + word;
        search += wordPlus;
      }
      
      let photo = await findWeatherImg(search);
      document.getElementById(imageID).setAttribute("src", photo);

      // Weather Icon
      let iconID = "icon" + j.toString();
      const iconImg = document.createElement("img");
      iconImg.setAttribute("height", "50px");
      iconImg.setAttribute("width", "50px");
      iconImg.setAttribute("id", iconID);
      iconImg.setAttribute("src", iconUrl);
      document.getElementById(dateID).appendChild(iconImg);
    }
  }
  else{
    // Remove card function
    for (let j = 1; j <=3; j++) {
      const removeElement = document.getElementById("weather-card").lastChild
      
      while (removeElement.firstChild){
          removeElement.lastChild.remove();
      }

      removeElement.remove();
    }
    
  }
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
    console.log(weather);

    //Weather Icon call
    let iconCode = (weather.data[0].weather.code).toString();
    console.log(iconCode);
    let iconUrl = getWeatherIcon(iconCode);
    console.log(iconUrl);

    // Location Display
    document.getElementById("card-title").innerText = locationName;

    // Temperature Display
    let temperature = (((weather.data[0].temp)* (9/5))+ 32).toFixed(2);
    document.getElementById("card-subtitle").innerText = temperature + " °F";

    // Weather Condition
    let condition = weather.data[0].weather.description;
    document.getElementById("card-text").innerText = condition;

    //searchable condition and update image
    var words = condition.split(" ");
    //console.log(words.length);
    
    var search = words[0];
    //console.log(search);
    for (var i = 1; i <= words.length - 1; i++) {
      //console.log(i);
      let word = words[i];

      let wordPlus = "+" + word;
      search += wordPlus;
    }
    let photo = await findWeatherImg(search);
    document.getElementById("image").setAttribute("src", photo);

    // Weather Icon
    const iconImg = document.createElement("img");
    iconImg.setAttribute("height", "50px");
    iconImg.setAttribute("width", "50px");
    iconImg.setAttribute("id", "weather_icon");
    iconImg.setAttribute("src", iconUrl);
    document.getElementById("card-title").appendChild(iconImg);
    
    // News
    let news = await getCurrentNews(locationName);
    document.getElementById("news-text").innerText = news;

    // Reset input field
    document.getElementById("search_bar").reset();
  }
});
