// API section


// APP Constants
const URL = "https://newsapi.org/v2/";
const ENDPOINTS = ["sources","top-headlines"];
const APIKEY = "";


// Fetches News Sources from API and returns an array of news Sources
export const getSources = (succ) => {
  return fetch(`${URL}${ENDPOINTS[0]}?apikey=${APIKEY}`)
  .then(res => res.json())
  .then(val => val.status === "ok" ? succ(val) : [] )
  .catch(err => []);

}

// Fetches top Headlines from Selected News Source 
export const getNews = (succ,sourceId) => {
  return fetch(`${URL}${ENDPOINTS[1]}?sources=${sourceId}&apikey=${APIKEY}`)
  .then(res => res.json())
  .then(val => val.status === "ok" ? succ(val.articles) : [] )
  .catch(err => []);

}



