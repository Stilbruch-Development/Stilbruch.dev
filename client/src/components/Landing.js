import React, { Component } from "react";
import styled from "styled-components";
// import Logo from "../images/stilbruchLogoDev.svg";
import MainLogo from "../images/MainLogo";

const LandingMain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 80rem;
  }

  /* phone */
  @media (max-width: 600px) {
    svg {
      width: 95rem;
    }
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

const LandingSub = styled.div`
  color: #ff0000;
  font-size: 4rem;
  letter-spacing: 0.8rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  margin: 3rem;

  /* phone */
  @media (max-width: 600px) {
    font-size: 6rem;
    letter-spacing: 1rem;
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

export default class Landing extends Component {
  render() {
    return (
      <LandingMain className="landing" id="Start">
        {/* <img className="navChange" src={Logo} alt="logo" /> */}
        <MainLogo />
        <LandingSub className="navChange">Webentwicklung</LandingSub>
      </LandingMain>
    );
  }
}
