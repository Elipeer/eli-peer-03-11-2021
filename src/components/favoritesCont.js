import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import weatherService from "../services/weatherService";
import ClearIcon from "@mui/icons-material/Clear";
import { setLocations } from "../store/reducers/appSettings";
import { setCurrentCity } from "../store/reducers/currentCity";
import Swal from "sweetalert2";

const FavoritesCont = (props) => {
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function getData() {
      if (props.locations) {
        let arr = [...favoriteLocations];
        for (const item of props.locations) {
          let curCity = await weatherService.getCurrentLocationWeather(item.id);
          arr.push({ ...curCity[0], city: item.city, id: item.id });
        }
        setFavoriteLocations(arr);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="auto0  center"> {!favoriteLocations[0] ? <h1>No Favorites Yet</h1> : <h1>Favorites</h1>}</div>
      {favoriteLocations[0] ? (
        <div className="favorites-cards-cont">
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.9",
              background: "aliceblue",
              position: "absolute",
              zIndex: "-1",
              borderRadius: "15px"
            }}
          />
          {favoriteLocations.map((item, i) => {
            return (
              <Fragment key={i + "sfdf"}>
                <div className="favorites-card pointer" onClick={() => redirectToMain(item.id, item.city)}>
                  <div
                    style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }}
                    onClick={(e) => removeFromSaved(item.id, e)}
                  >
                    <ClearIcon />
                  </div>
                  <div>{item.city}</div>
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${
                      item.WeatherIcon < 10 ? "0" + item.WeatherIcon : item.WeatherIcon
                    }-s.png`}
                    alt="weather"
                    style={{ width: "120px", height: "80px", borderRadius: "15px" }}
                  />
                  <div className="bold mb-15" style={{ color: "#9782a9" }}>
                    {item.WeatherText}
                  </div>
                  <div>
                    {props.mode === "metric"
                      ? item.Temperature.Metric.Value + "° " + item.Temperature.Metric.Unit
                      : item.Temperature.Imperial.Value + "° " + item.Temperature.Imperial.Unit}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      ) : null}
    </>
  );
  function redirectToMain(id, name) {
    props.setCurrentCity({ name, id });
    history.push("/");
  }

  function removeFromSaved(id, e) {
    e.stopPropagation();

    Swal.fire({
      title: "Remove",
      text: "Are you sure you want to remove this location from favorites?",
      icon: "warning",
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        let currentLocationsDetails = [...favoriteLocations];
        let savedLocations = [...props.locations];
        currentLocationsDetails = currentLocationsDetails.filter((x) => !x.id.includes(id));
        savedLocations = props.locations.filter((x) => !x.id.includes(id));
        props.setLocations(savedLocations);
        setFavoriteLocations(currentLocationsDetails);
      }
    });
  }
};

const mapStateToProps = (state) => {
  return {
    locations: state.persistedReducer.locations,
    mode: state.persistedReducer.mode
  };
};
const mapDispatchToProps = { setLocations, setCurrentCity };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesCont);
