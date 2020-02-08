import React from "react";
import styled from "styled-components";
import StilbruchLogo from "../images/styled_images/StilbruchLogo";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

const MainBox = styled.span`
  font-size: 2.5rem;
  line-height: 1.5em;
  text-align: justify;
  padding: 1em;

  // phone
  @media (max-width: 600px) {
    font-size: 6.5rem;
    text-align: left;
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

const Signature = styled.span`
  padding: 0;
  display: block;
  font-size: 2.5rem;
  font-style: italic;
  text-align: right;

  // phone
  @media (max-width: 600px) {
    font-size: 5rem;
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

export default function BoxS() {
  return (
    <MyFlex className="myFlex sGrid navChange" id="Story">
      <FlexHeader>Story</FlexHeader>
      <FlexMainItem>
        <MainBox>
          {
            "Als Hobby-Entwickler habe ich Spaß daran, den Problemen meines ärztlichen Alltages mit Hilfe von Programmcode und intelligenten Software-Tools zu begegnen. Meine Webapplikationen sollen dabei die Möglichkeit bieten, konventionelle und repetitive Arbeitsprozesse in der Medizin zu reduzieren und zu erleichtern. Das kann wertvolle Zeit sparen, die Patientenversorgung verbessern und auch einfach mehr Spaß machen. Dabei sind mir Funktionalität und Zuverlässigkeit meiner Anwendungen wichtiger als Komplexität und schickes Design. Die Verbindung meines Berufes, der Medizin, mit meinem Hobby, der Softwareentwicklung stellt für mich kein "
          }
          <StilbruchLogo />
          {" dar."}
          <Signature>-- Dr. med. M. Hübner</Signature>
        </MainBox>
      </FlexMainItem>
    </MyFlex>
  );
}
