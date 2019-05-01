import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import tLogo from "../images/tLogo.svg";

const StyledLink = styled(Link)`
  color: #ff0000;
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);

  img {
    margin-top: 1rem;
    margin-right: 2rem;
    height: 6rem;
  }

  /* phone */
  @media (max-width: 600px) {
    img {
      height: 12rem;
    }
  }
  /* tablet portrait */
  @media (max-width: 900px) {
  }
  /* tablet landscape */
  @media (max-width: 1200px) {
  }
  /* desktop */
  @media (max-width: 1800px) {
  }
  /* >1800px = wide screen */
`;

export default class FooterLogo extends Component {
  render() {
    return (
      <StyledLink to={this.props.link}>
        <img src={tLogo} alt="logo" />
      </StyledLink>
    );
  }
}
