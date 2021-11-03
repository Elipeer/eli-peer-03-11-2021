import React from "react";
import logo from "../../assets/images/logo.png";

export default function GenericLogo() {
  return (
    <div className="generic-logo">
      <img src={logo} alt="logo image" className="logo-for-mobile" />
    </div>
  );
}
