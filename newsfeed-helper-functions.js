async function getCurrentNews(locationInput) {
  if (locationInput) {
    let newsArticles;

    const API_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${locationInput}&api-key=qllmMtHLGugS70k6UGMjIpaNHs3zeWos`;

    const response = await fetch(API_URL);
    console.log(response);
    const searchNews = await response.json();
    console.log(searchNews);
    newsArticles = searchNews.response.docs[0].abstract;
    console.log(newsArticles);
    return newsArticles;
  }
}

export { getCurrentNews };
