import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import TLogo from "../images/styled_images/FooterLogo";

const StyledLink = styled(Link)`
  color: #ff0000;
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
`;

export default class FooterLogo extends Component {
  render() {
    return (
      <StyledLink to={this.props.link}>
        <TLogo />
      </StyledLink>
    );
  }
}
