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
            "Als selbst erlernter Webentwickler versuche ich den Problemen meines ärztlichen Alltages mit Hilfe von Programmcode und der Entwicklung intelligenter Software-Tools zu entgegnen. Funktionalität und Zuverlässigkeit sind mir dabei wichtiger als Komplexität und Design. Meine Webapplikationen reduzieren und erleichtern konventionelle und repetitive Arbeitsprozesse in der Medizin. Das spart Zeit, verbessert die Patientenversorgung und macht einfach mehr Spaß. Die Verbindung konservativer Medizin mit den vielfältigen Möglichkeiten moderner Webentwicklung ist der "
          }
          <StilbruchLogo />
          {" dem ich mich widme."}
          <Signature>-- Dr. M. Hübner</Signature>
        </MainBox>
      </FlexMainItem>
    </MyFlex>
  );
}
