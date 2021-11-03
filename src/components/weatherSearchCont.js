import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import CurrentForcast from "./currentForcast";

const WeatherSearchCont = (props) => {
  const [citiesList, setCitiesList] = useState([""]);
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
        setSearchCityName(props.match.params.name);
      }

      let curCity = await weatherService.getCurrentLocationWeather(cityId);
      let fiveDay = await weatherService.getFiveDayForcast(cityId);
      setSearchCityId(cityId);
      setFiveDayDetails(fiveDay.DailyForecasts);
      setCurrentCityDetails(curCity[0]);
    }
    getWeatherFromApi();
  }, []);

  return (
    <>
      <div className="container center">
        <div style={{ width: "500px" }} className="auto0">
          <Autocomplete
            options={citiesList[0] ? citiesList.map((item) => item.name) : []}
            value={searchCityName}
            blurOnSelect
            openOnFocus
            renderInput={(params) => (
              <TextField {...params} label="Search city..." onChange={(e) => onChangeOfAutoComplete(e.target.value)} />
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
      let fiveDay = await weatherService.getFiveDayForcast(id[0].key);

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

export default WeatherSearchCont;
