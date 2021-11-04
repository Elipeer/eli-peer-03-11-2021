import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import weatherService from "../services/weatherService";
import CurrentForcast from "./currentForcast";

const WeatherSearchCont = (props) => {
  const [citiesList, setCitiesList] = useState([]);
  const [fiveDayDetails, setFiveDayDetails] = useState(null);
  const [searchCityName, setSearchCityName] = useState("");
  const [searchCityId, setSearchCityId] = useState("");
  const [currentCityDetails, setCurrentCityDetails] = useState(null);

  useEffect(() => {
    async function getWeatherFromApi() {
      //Tel aviv id
      let cityId = "215854";
      if (props.match.params.id) {
        cityId = props.match.params.id;
        //todo
        // setSearchCityName(props.match.params.name);
      }

      const curCity = await weatherService.getCurrentLocationWeather(cityId);
      const fiveDay = await weatherService.getFiveDayForcast(cityId, props.mode);
      debugger;
      setSearchCityId(cityId);
      setFiveDayDetails(fiveDay.DailyForecasts);
      setCurrentCityDetails(curCity[0]);
    }
    getWeatherFromApi();
  }, []);

  useEffect(() => {
    async function getWeatherFromApi() {
      let fiveDay = await weatherService.getFiveDayForcast(searchCityId, props.mode);
      setFiveDayDetails(fiveDay.DailyForecasts);
    }
    if (searchCityId) getWeatherFromApi();
  }, [props.mode]);

  useEffect(() => {
    debugger;
    async function getUpdatedBackground() {
      const photos = await weatherService.getPhotos(currentCityDetails?.WeatherText);
      debugger;
      document.body.style.backgroundImage = `url(${photos.results[0].urls.regular})`;
      document.body.style.backgroundSize = `cover`;
      document.body.style.backgroundRepeat = `no-repeat`;
    }
    if (currentCityDetails) getUpdatedBackground();
  }, [currentCityDetails]);

  return (
    <>
      <div className="container center">
        <div
          style={{
            background: "aliceblue",
            borderRadius: "25px",
            display: "flex",
            alignContent: "start",
            alignItems: "center",
            padding: "12px",
            color: "white",
            marginTop: "20px",
            maxWidth: "500px"
          }}
          className="auto0"
        >
          <Autocomplete
            options={citiesList[0] ? citiesList.map((item) => item.name) : []}
            value={searchCityName}
            fullWidth
            blurOnSelect
            openOnFocus
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                onChange={(e) => onChangeOfAutoComplete(e.target.value)}
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                placeholder="Search city"
              />
            )}
            onChange={(e) => onChangeOfCurrentCity(e)}
          />
        </div>
      </div>
      <CurrentForcast
        currentCityName={searchCityName || "Tel Aviv"}
        currentCityDetails={currentCityDetails}
        fiveDayDetails={fiveDayDetails}
        cityId={searchCityId}
      />
    </>
  );

  async function onChangeOfCurrentCity(e) {
    if (e.target.innerHTML) {
      let list = [...citiesList];
      let id = list.filter((x) => x.name === e.target.innerHTML);
      let curCity = await weatherService.getCurrentLocationWeather(id[0].key);
      let fiveDay = await weatherService.getFiveDayForcast(id[0].key, props.mode);

      setCurrentCityDetails(curCity[0]);
      setFiveDayDetails(fiveDay.DailyForecasts);
      setSearchCityName(id[0].name);
      setSearchCityId(id[0].key);
    }
  }

  async function onChangeOfAutoComplete(key) {
    let citiesListByKey = await weatherService.getAutoComplete(key);
    if (citiesListByKey[0]) {
      let keyRes = [];
      citiesListByKey.forEach((city) => {
        keyRes.push({ name: city.LocalizedName, key: city.Key });
      });
      setCitiesList(keyRes);
    }
  }
};

const mapStateToProps = (state) => {
  return {
    locations: state.persistedReducer.locations,
    mode: state.persistedReducer.mode
  };
};

export default connect(mapStateToProps)(WeatherSearchCont);
