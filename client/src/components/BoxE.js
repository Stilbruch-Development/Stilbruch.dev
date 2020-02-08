import React from "react";
import MyFlex from "./styled_components/MyFlex";
import styled from "styled-components";
import FlexHeader from "./styled_components/FlexHeader";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  margin: 1rem 1rem;
  padding: 1rem;
  text-align: center;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4) 5px 10px 20px inset;
  background: rgba(255, 0, 0, 0);
  color: #ff0000;
  font-size: 4rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  height: 8rem;
  flex-grow: 1;

  // phone
  @media (max-width: 600px) {
    font-size: 8rem;
    height: 15rem;
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
  // >1800px = wide screen */
`;

const Entwicklung = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 2rem;
  padding: 2rem;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4) 5px 10px 20px inset;
  min-width: 90%;
`;

export default function BoxE() {
  return (
    <MyFlex className="navChange" id="Entwicklung">
      <FlexHeader>Entwicklung</FlexHeader>
      <Entwicklung>
        <Item>Javascript</Item>
        <Item>HTML 5</Item>
        <Item>CSS</Item>
        <Item>Node</Item>
        <Item>Express</Item>
        <Item>React</Item>
        <Item>Styled-Components</Item>
        <Item>Redux</Item>
        <Item>MongoDB</Item>
        <Item>Jest</Item>
        <Item>Hooks</Item>
        <Item>Electron</Item>
      </Entwicklung>
    </MyFlex>
  );
}
