import React, { Component } from "react";
import styled from "styled-components";
import FooterLogo from "./FooterLogo";
import FooterItem from "./FooterItem";

const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem 0 3rem 0;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterMain>
        <FooterLogo link="/#Start" />
        <FooterItem head="│ Kontakt " link="/#Kontakt" />
        <FooterItem head="│ Datenschutz " link="/datenschutz/#top" />
        <FooterItem head="│ Impressum" link="/impressum/#top" />
      </FooterMain>
    );
  }
}
