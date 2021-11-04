import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/accu-weather-logo.png";
import { setMode } from "../store/reducers/appSettings";

const NavBar = (props) => {
  const [alignment, setAlignment] = React.useState(props.mode);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="nav-con">
      <Link to="/">
        <div className="generic-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className="nav-links inline-block">
        <div className="mr-30 inline-block">
          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
            <ToggleButton value="imperial" aria-label="left aligned" onClick={() => props.setMode("imperial")}>
              Imperial
            </ToggleButton>
            <ToggleButton value="metric" aria-label="centered" onClick={() => props.setMode("metric")}>
              Metric
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="inline-block">
          <div className="inline-block mr-30">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <b>Home</b>
            </Link>
          </div>

          <Link style={{ textDecoration: "none", color: "black" }} to="/favorites">
            <b>Favorites</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.persistedReducer.mode
  };
};
const mapDispatchToProps = { setMode };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
