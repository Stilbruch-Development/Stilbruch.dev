import React from "react";
import styled from "styled-components";
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
  font-size: 2rem;
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
            "Während meiner ärztlichen Tätigkeit musste ich immer wieder feststellen, wie umständlich die Software war mit der ich tagtäglich arbeitete. Daher entschloss ich mich vor einiger Zeit, die Applikationen die ich nutzen wollte selber zu programmieren. So entstand das Hobby-Projekt VisionX."
          }
          <Signature>-- M. Hübner</Signature>
        </MainBox>
      </FlexMainItem>
    </MyFlex>
  );
}
