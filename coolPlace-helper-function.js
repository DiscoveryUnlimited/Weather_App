export async function findCoolCoffeeNearBy(locationInput) {
  //console.log("hi");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "fsq357FgD6QhhVI8DF4aHQnAvI3oASl7Rw3k/rGw2e+DAM4=",
    },
  };

  const fourSquareUrl =
    "https://api.foursquare.com/v3/places/search?query=coffee&near=${locationInput}&sort=RATING";
  //console.log("hi, it is working");
  const response = await fetch(fourSquareUrl, options);
  const data = await response.json();
  return data;
  const coolPlaceName = data.name;
  const coolPlaceAddress = data.location.formatted_address;
  const result = coolPlaceName + " in " + coolPlaceAddress;
  console.log(coolPlaceName);
  console.log(coolPlaceAddress);
  return result;
}


