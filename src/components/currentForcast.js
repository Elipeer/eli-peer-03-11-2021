import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";
import ForcastCards from "./fiveDayForcastCards";
import { setLocations } from "../store/reducers/appSettings";
import { connect } from "react-redux";
import { Button, Switch } from "@mui/material";

const CurrentForcast = (props) => {
  const [imperialTemp, setImperialTemp] = useState("");
  const [metricTemp, setMetricTemp] = useState("");
  const [imperialMode, setImperialMode] = useState(false);

  useEffect(() => {
    if (props.currentCityDetails?.Temperature.Imperial.Value) {
      setImperialTemp(props.currentCityDetails?.Temperature.Imperial.Value + "° " + props.currentCityDetails?.Temperature.Imperial.Unit);
      setMetricTemp(props.currentCityDetails?.Temperature.Metric.Value + "° " + props.currentCityDetails?.Temperature.Metric.Unit);
    }
  }, [props.currentCityDetails]);

  return (
    <>
      <div className="weather-cont">
        <div className="padding20 flex flex-between ai-c">
          <div className="flex ac-c ai-c">
            <img
              src={`https://developer.accuweather.com/sites/default/files/${
                props.currentCityDetails?.WeatherIcon < 10
                  ? "0" + props.currentCityDetails?.WeatherIcon
                  : props.currentCityDetails?.WeatherIcon
              }-s.png`}
              alt="cloudy"
              style={{ width: "120px", height: "80px", borderRadius: "15px" }}
            />
            <div className="ml-10 white-color">
              <div className="bold fs-26">{props.currentCityName}</div>
              <div className="bold">{props.currentCityDetails?.WeatherText}</div>
              <h2>{imperialMode ? imperialTemp : metricTemp || ""}</h2>
              <div className="center mb-20">
                <span style={{ color: imperialMode ? "white" : "lightgray" }} onClick={() => setImperialMode(true)}>
                  Imperial
                </span>
                /
                <span style={{ color: !imperialMode ? "white" : "lightgray" }} onClick={() => setImperialMode(false)}>
                  Metric
                </span>
              </div>
            </div>
          </div>
          <div className="as-c pointer">
            {props.locations.some((x) => x.id === props.cityId) ? (
              <div className="white-color flex">
                <FavoriteIcon fontSize="large" />
                <Button color="inherit" onClick={toggleFavoriteCity}>
                  Remove from favorites
                </Button>
              </div>
            ) : (
              <div className="white-color flex">
                <FavoriteBorderIcon fontSize="large" />
                <Button color="inherit" onClick={toggleFavoriteCity}>
                  Add to favorites
                </Button>
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
    if (props.locations.some((x) => x.id === props.cityId)) {
      arr = props.locations.filter((x) => !x.id.includes(props.cityId));
      props.setLocations(arr);
    } else {
      arr.push({ id: props.cityId, city: props.currentCityName });
      props.setLocations(arr);
    }
  }
};

const mapStateToProps = (state) => {
  return {
    locations: state.persistedReducer.locations
  };
};
const mapDispatchToProps = { setLocations };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentForcast);
