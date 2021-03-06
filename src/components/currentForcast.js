import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import ForcastCards from "./fiveDayForcastCards";
import { setLocations } from "../store/reducers/appSettings";
import { connect } from "react-redux";
import { Button } from "@mui/material";

const CurrentForcast = (props) => {
  const [imperialTemp, setImperialTemp] = useState("");
  const [metricTemp, setMetricTemp] = useState("");

  useEffect(() => {
    if (props.currentCityDetails?.Temperature.Imperial.Value) {
      setImperialTemp(props.currentCityDetails?.Temperature.Imperial.Value + "° " + props.currentCityDetails?.Temperature.Imperial.Unit);
      setMetricTemp(props.currentCityDetails?.Temperature.Metric.Value + "° " + props.currentCityDetails?.Temperature.Metric.Unit);
    }
  }, [props.currentCityDetails]);

  return (
    <>
      <div className="weather-cont">
        <div className="opacity-cont" />
        <div className="top-cont-current-weather">
          <div className="flex ac-c ai-c">
            {props.currentCityDetails ? (
              <img
                src={`https://developer.accuweather.com/sites/default/files/${
                  props.currentCityDetails?.WeatherIcon < 10
                    ? "0" + props.currentCityDetails?.WeatherIcon
                    : props.currentCityDetails?.WeatherIcon
                }-s.png`}
                alt="cloudy"
                style={{ width: "120px", height: "80px", borderRadius: "15px" }}
              />
            ) : null}

            <div className="ml-10">
              <div className="bold fs-26">{props.currentCity.name}</div>
              <div className="bold">{props.currentCityDetails?.WeatherText}</div>
              <h2>{props.mode === "imperial" ? imperialTemp : metricTemp || ""}</h2>
            </div>
          </div>
          <div className="as-c pointer" onClick={toggleFavoriteCity}>
            {props.locations.some((x) => x.id === props.currentCity.id) ? (
              <div className="flex">
                <FavoriteIcon fontSize="large" />
                <Button color="inherit">Remove from favorites</Button>
              </div>
            ) : (
              <div className="flex">
                <FavoriteBorderIcon fontSize="large" />
                <Button color="inherit">Add to favorites</Button>
              </div>
            )}
          </div>
        </div>
        <ForcastCards cardDetails={props.fiveDayDetails} />
      </div>
    </>
  );
  function toggleFavoriteCity() {
    let arr = [...props.locations];
    if (props.locations.some((x) => x.id === props.currentCity.id)) {
      arr = props.locations.filter((x) => !x.id.includes(props.currentCity.id));
      props.setLocations(arr);
    } else {
      arr.push({ id: props.currentCity.id, city: props.currentCity.name });
      props.setLocations(arr);
    }
  }
};

const mapStateToProps = (state) => {
  return {
    locations: state.persistedReducer.locations,
    currentCity: state.currentCity.currentCity,
    mode: state.persistedReducer.mode
  };
};
const mapDispatchToProps = { setLocations };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForcast);
