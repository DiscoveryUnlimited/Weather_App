export { placeSearch };
async function placeSearch() {
  try {
    const searchParams = new URLSearchParams({
      query: "coffee",
      near: "cary,nc",
      open_now: "true",
      sort: "DISTANCE",
    });
    const results = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "fsq357FgD6QhhVI8DF4aHQnAvI3oASl7Rw3k/rGw2e+DAM4=",
        },
      }
    );
    const data = await results.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
