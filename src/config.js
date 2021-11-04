const apiUrl = "http://dataservice.accuweather.com";
const apikey = "?apikey=8R5LHteCio2AzwzcPtwco7IzUwMKxtXj";
export default {
  // protected
  autoCompleteEndpoint: `${apiUrl}/locations/v1/cities/autocomplete${apikey}&q=`,
  getSearchedLocationEndpoint: `${apiUrl}/currentconditions/v1/`,
  getUnsplashImagesEndpoint: "https://api.unsplash.com/search/photos?query=",
  getFiveDayForcastndpoint: `${apiUrl}/forecasts/v1/daily/5day/`,
  unsplashApiKey: "&client_id=6PdsbaYQVTJAI6R_LbA7zZ7V-Qn-3uVY_CLKd2ZEwGk",
  apikey
};
