export { findCoolPlaceNearBy };
async function findCoolPlaceNearBy() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "fsq357FgD6QhhVI8DF4aHQnAvI3oASl7Rw3k/rGw2e+DAM4=",
    },
  };

  const fourSquareUrl =
    "https://api.foursquare.com/v3/places/search?query=coffee&near=cary&sort=RATING";
console.log("hi, it is working");
  const response = await fetch(fourSquareUrl, options);
  const data = await response.json();
  const coolPlace = data.results.
  console.log(coolPlace);
}
