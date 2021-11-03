import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/accu-weather-logo.png";

const NavBar = (props) => {
  return (
    <div className="nav-con">
      <Link to="/">
        <div className="generic-logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="nav-links inline-block">
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

export default NavBar;
