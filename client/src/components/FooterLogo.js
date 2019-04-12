import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../images/t.svg";

export default class FooterLogo extends Component {
  render() {
    return (
      <Link to={this.props.link} className="footerLogo">
        <img src={Logo} alt="logo" />
      </Link>
    );
  }
}
