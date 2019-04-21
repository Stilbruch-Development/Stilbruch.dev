import React from "react";
import MyFlex from "./styled_components/MyFlex";
import styled from "styled-components";
import FlexHeader from "./styled_components/FlexHeader";

export default function BoxE() {
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
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8) 5px 10px 20px inset;
    background: rgba(255, 0, 0, 0);
    color: #ff0000;
    font-size: 4rem;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
    height: 8rem;
    flex-grow: 1;
  `;

  const Entwicklung = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-around;
    flex-wrap: wrap;
  `;

  return (
    <MyFlex className="navChange" id="Entwicklung">
      <FlexHeader>Tools & Skills</FlexHeader>
      <Entwicklung>
        <Item>Javascript</Item>
        <Item>React</Item>
        <Item>Node.js</Item>
        <Item>Express</Item>
        <Item>MongoDB</Item>
        <Item>Redux</Item>
        <Item>UI Design/ CSS</Item>
        <Item>Semantic UI</Item>
        <Item>React Native</Item>
        <Item>HTML 5</Item>
      </Entwicklung>
    </MyFlex>
  );
}
