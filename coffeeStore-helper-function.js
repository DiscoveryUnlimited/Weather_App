export async function findCoolCoffeeNearBy(locationInput) {
  //searchable condition and update image
  var words = locationInput.split(" ");
  var search = words[0];

  for (var i = 1; i <= words.length - 1; i++) {
    //console.log(i);
    let word = words[i];

    let wordPlus = "+" + word;

    search += wordPlus;
  }
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "fsq357FgD6QhhVI8DF4aHQnAvI3oASl7Rw3k/rGw2e+DAM4=",
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=coffee&near=" +
      search +
      "&sort=DISTANCE",
    options
  ).then((response) => response.json());
  // .then((response) => console.log(response));
  //console.log(response);

  //console.log(search);
  const address = response.results[0].location.formatted_address;
  //console.log("addrress is " + address);
  const storeName = response.results[0].name;
  //console.log("store name is: " + storeName);
  let result = storeName + " at " + address;
  //console.log(result);

  return result;
}
