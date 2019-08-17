import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CookieWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
  background: rgba(24, 24, 24, 0.9);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  z-index: 1;
  position: sticky;
  bottom: 0;

  button {
    border: 1px solid #ff0000;
    border-radius: 10px;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
    background: rgba(95, 95, 95, 0.3);
    color: rgb(255, 0, 0);
    font-size: 2rem;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    font-weight: bold;
  }

  .link {
    font-size: 1.5rem;
    color: rgb(255, 0, 0);
  }

  button :hover {
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
    background: rgba(95, 95, 95, 0.6);
    cursor: pointer;
  }

  // phone
  @media (max-width: 600px) {
    font-size: 2rem;

    button {
      font-size: 3rem;
      margin: 0.5rem;
    }
    .link {
      font-size: 2.5rem;
    }
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

class CookieBanner extends Component {
  constructor() {
    super();
    this.handleCookieAccept = this.handleCookieAccept.bind(this);
    this.handleCookieRejection = this.handleCookieRejection.bind(this);
  }

  handleCookieAccept() {
    this.props.setCookies();
    this.props.closeCookieBanner();
  }

  handleCookieRejection() {
    this.props.closeCookieBanner();
  }

  render() {
    return (
      <CookieWrap>
        <h1>
          Stilbruch.dev nutzt Cookies um die Benutzerfreundlichkeit zu
          verbessern.
        </h1>
        <Link className="link" to="/datenschutz">
          Infos zum Datenschutz
        </Link>
        <button onClick={this.handleCookieAccept}>Akzeptieren</button>
        <button onClick={this.handleCookieRejection}>Ablehnen</button>
      </CookieWrap>
    );
  }
}

export default CookieBanner;
