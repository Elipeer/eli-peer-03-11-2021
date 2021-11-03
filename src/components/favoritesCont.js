import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import weatherService from "../services/weatherService";

const FavoritesCont = (props) => {
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function getData() {
      if (props.locations) {
        let arr = [...favoriteLocations];
        for (const item of props.locations) {
          let curCity = await weatherService.getCurrentLocationWeather(item.id);
          arr.push({ ...curCity[0], city: item.city, id: item.id }, { ...curCity[0], city: item.city, id: item.id });
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
          {favoriteLocations.map((item, i) => {
            return (
              <Fragment key={i + "sfdf"}>
                <div className="favorites-card" onClick={() => redirectToMain(item.id, item.city)}>
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
                    {item.Temperature.Metric.Value} {item.Temperature.Metric.Unit}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      ) : null}
    </>
  );
  function redirectToMain(id, city) {
    history.push(`/${id}/${city}`);
  }
};

const mapStateToProps = (state) => {
  return {
    locations: state.persistedReducer.locations
  };
};

export default connect(mapStateToProps)(FavoritesCont);
