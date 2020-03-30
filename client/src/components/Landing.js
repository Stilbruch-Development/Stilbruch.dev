import React, { Component } from "react";
import styled from "styled-components";
// import MainLogo from "../images/styled_images/MainLogo";

const LandingMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  font-size: 12rem;
  letter-spacing: 2.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
`;

const LandingSub = styled.div`
  color: #ff0000;
  font-size: 4rem;
  letter-spacing: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  margin: 5rem;

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

export default class Landing extends Component {
  render() {
    return (
      <LandingMain id="Start" data-testid="LandingComponent">
        VisionX
        <LandingSub className="navChange">Webentwicklung</LandingSub>
        {/* <div className="navChange" style={{ width: "1%", height: "10%" }}>
          <MainLogo />
        </div> */}
      </LandingMain>
    );
  }
}
