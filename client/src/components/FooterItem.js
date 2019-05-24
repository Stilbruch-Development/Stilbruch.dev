import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledLink = styled(Link)`
  color: #ff0000;
  text-decoration: none;
  font-size: 2.5rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  padding-right: 1.3rem;

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
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

export default class FooterItem extends Component {
  render() {
    return (
      <StyledLink
        to={this.props.link}
        scroll={el =>
          el.scrollIntoView({ behavior: "instant", block: "start" })
        }
      >
        {this.props.head}
      </StyledLink>
    );
  }
}
