import axios from "axios";
import config from "../config";

export default {
  getAutoComplete: (key) => {
    return new Promise(async (resolve) => {
      axios.get(config.autoCompleteEndpoint + key).then((res) => {
        if (res.data) return resolve(res.data);
      });
    });
  },

  getPhotos: (key) => {
    return new Promise(async (resolve) => {
      axios.get(config.getUnsplashImagesEndpoint + key + config.unsplashApiKey).then((res) => {
        if (res.data) return resolve(res.data);
      });
    });
  },

  getCurrentLocationWeather: (cityId) => {
    return new Promise(async (resolve) => {
      axios.get(config.getSearchedLocationEndpoint + cityId + config.apikey).then((res) => {
        if (res.data) return resolve(res.data);
      });
    });
  },

  getFiveDayForcast: (cityId, mode) => {
    return new Promise(async (resolve) => {
      axios.get(config.getFiveDayForcastndpoint + cityId + config.apikey + `${mode === "metric" ? "&metric=true" : ""}`).then((res) => {
        if (res.data) return resolve(res.data);
      });
    });
  }
};
