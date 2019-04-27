import React from "react";
import styled from "styled-components";
import Stilbrüche from "../images/stilbrücheLogoShort.svg";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

export default function BoxS() {
  const MainBox = styled.span`
    font-size: 2.5rem;
    line-height: 1.5em;
    text-align: justify;
    padding: 1em;

    /* phone */
    @media (max-width: 600px) {
      font-size: 6.5rem;
      text-align: left;
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

  const Logo = styled.img`
    height: 1.5em;
    vertical-align: bottom;
  `;

  const Signature = styled.span`
    padding: 0;
    display: block;
    font-size: 2.5rem;
    font-style: italic;
    text-align: right;

    /* phone */
    @media (max-width: 600px) {
      font-size: 5rem;
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
  return (
    <MyFlex className="myFlex sGrid navChange" id="Story">
      <FlexHeader>Story</FlexHeader>
      <FlexMainItem>
        <MainBox>
          {"Als Arzt"}
          <i> und </i>
          {
            "Entwickler nutze ich die Möglichkeiten die mit modernen Webtechnologien entstehen um sie im Umfeld der Medizin einzusetzen. Intelligente Web-Applikationen minimieren konservative und repetitive Arbeitsprozesse in der Medizin und können die Patientenversorgung sichere und effektiver sowie die Arbeit kreativer und angenehmer machen. Als Webentwickler bin ich bereit auch unkonventionelle Wege zu gehen und nehme "
          }
          <Logo src={Stilbrüche} alt="logo" />
          {" bewusst in Kauf!"}
          <Signature>-- Dr. M. Hübner</Signature>
        </MainBox>
      </FlexMainItem>
    </MyFlex>
  );
}
