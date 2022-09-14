export { findWeatherImg}


// Image function for given weather condition
async function findWeatherImg(weather){
    const unsplashUrl = "https://api.unsplash.com/search/photos?query="+weather+"&client_id=R9FtTFXFjz2aEq2R-AtYc2nMsbJ4NE0R-p-1x-V4QfI";
    console.log('calling');
    const response = await fetch(unsplashUrl);
    const data = await response.json()
    const photos = await data.results;
    
    var rand = Math.floor(Math.random() * (Object.keys(photos).length));
    const imgUrl = data.results[rand].urls.small;

    return imgUrl
}
