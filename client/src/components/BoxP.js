import React from "react";
import styled from "styled-components";
import StaRLogo from "../images/styled_images/StaRLogo";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

const ProjectImage = styled.a`
  background-size: 100%;
  border-radius: 8px;
`;

const Lable = styled.a`
  font-size: 5rem;
  letter-spacing: 0.5rem;
  color: rgba(0, 80, 120, 1);
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin-top: 2rem;

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
    letter-spacing: 1rem;
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

const Lable2 = styled.a`
  font-size: 3rem;
  letter-spacing: 0.3rem;
  text-decoration: underline;
  color: inherit;
  margin: 1.5rem;

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
    letter-spacing: 1rem;
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

export default function BoxP() {
  return (
    <MyFlex className="navChange" id="Projekte">
      <FlexHeader>Projekt</FlexHeader>
      <FlexMainItem>
        <ProjectImage>
          <StaRLogo />
        </ProjectImage>
        <Lable>Standards der Radiologie</Lable>
        <p>Mehr Informationen auf
        <Lable2
          href="https://github.com/VisionX-Development/StaR"
          target="_blank"
        >GitHub
        </Lable2></p>
      </FlexMainItem>
    </MyFlex>
  );
}
