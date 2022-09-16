async function getCurrentNews(locationInput) {
  if (locationInput) {
    let newsArticles;

    const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${locationInput}&api-key=qllmMtHLGugS70k6UGMjIpaNHs3zeWos`;

    const response = await fetch(API_URL);
    const searchNews = await response.json();
    const result = searchNews.response.docs;

    var rand = Math.floor(Math.random() * result.length);
    newsArticles = result[rand].abstract;

    return newsArticles;
  }
}

export { getCurrentNews };
