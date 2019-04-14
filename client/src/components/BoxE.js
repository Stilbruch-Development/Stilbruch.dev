import React from "react";
import MyFlex from "./styled_components/MyFlex";
import styled from "styled-components";

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

  return (
    <MyFlex className="navChange" id="Entwicklung">
      <div className="flexHeader">Tools & Skills</div>
      <div className="entwicklung">
        <Item>Javascript</Item>
        <div className="eItem"> React</div>
        <div className="eItem"> Node.js</div>
        <div className="eItem"> Express</div>
        <div className="eItem"> MongoDB</div>
        <div className="eItem"> Redux</div>
        <div className="eItem"> UI Design/ CSS</div>
        <div className="eItem"> Semantic UI</div>
        <div className="eItem"> React Native</div>
        <div className="eItem"> HTML 5</div>
      </div>
    </MyFlex>
  );
}
