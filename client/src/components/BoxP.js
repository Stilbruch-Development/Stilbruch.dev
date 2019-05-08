import React from "react";
import styled from "styled-components";
import LogoRadblocs from "../images/logo_radblocs.png";
import BackgroundImg from "../images/radblocs_background.jpg";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

const ProjectImage = styled.a`
  background: url(${BackgroundImg});
  background-size: 100%;
  border-radius: 8px;
`;

export default function BoxP() {
  return (
    <MyFlex className="navChange" id="Projekte">
      <FlexHeader>Projekte</FlexHeader>
      <FlexMainItem>
        <ProjectImage href="https://www.radblocs.com">
          <img style={{ maxWidth: "90%" }} src={LogoRadblocs} alt="logo" />
        </ProjectImage>
      </FlexMainItem>
    </MyFlex>
  );
}
