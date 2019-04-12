import React, { Component } from "react";
import Logo from "../images/stilbruchLogoDev.svg";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing" id="Start">
        <div className="mainLogo">
          <img className="navChange" src={Logo} alt="logo" />
        </div>
        <div className="mainSub navChange">Webentwicklung</div>
      </div>
    );
  }
}
