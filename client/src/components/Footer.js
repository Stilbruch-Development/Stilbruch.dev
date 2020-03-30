import React, { Component } from "react";
import styled from "styled-components";
import FooterItem from "./FooterItem";
import FooterLogo from "./FooterLogo"

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
      <FooterMain data-testid="FooterMain">
        < FooterLogo dataTestId="FooterLogo" link="#Start"/>
        <FooterItem
          dataTestId="FooterItemKontakt"
          head="│ Kontakt "
          link="/#Kontakt"
        />
        <FooterItem
          dataTestId="FooterItemDatenschutz"
          head="│ Datenschutz "
          link="/datenschutz/#top"
        />
        <FooterItem
          dataTestId="FooterItemImpressum"
          head="│ Impressum"
          link="/impressum/#top"
        />
      </FooterMain>
    );
  }
}
