// API section

const URL = "https://newsapi.org/v2/";
const ENDPOINTS = ["sources","top-headlines"];
const APIKEY = "";


export const getSources = (succ) => {
  return fetch(`${URL}${ENDPOINTS[0]}?apikey=${APIKEY}`)
  .then(res => res.json())
  .then(val => val.status === "ok" ? succ(val) : [] )
  .catch(err => []);

}


export const getNews = (succ,sourceId) => {
  return fetch(`${URL}${ENDPOINTS[1]}?sources=${sourceId}&apikey=${APIKEY}`)
  .then(res => res.json())
  .then(val => val.status === "ok" ? succ(val.articles) : [] )
  .catch(err => []);

}



