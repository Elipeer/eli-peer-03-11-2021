const apiUrl = "http://dataservice.accuweather.com";
const apikey = "?apikey=p4ipsF7hW0TT5JjnAOjnP2DMPlSkze9g";
export default {
  // protected
  autoCompleteEndpoint: `${apiUrl}/locations/v1/cities/autocomplete${apikey}&q=`,
  getSearchedLocationEndpoint: `${apiUrl}/currentconditions/v1/`,
  apikey,
  getFiveDayForcastndpoint: `${apiUrl}/forecasts/v1/daily/5day/`
};
