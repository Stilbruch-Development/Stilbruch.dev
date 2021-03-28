import React from "react";
import styled from "styled-components";
import { ReactComponent as StaRLogo } from "../StaR_Main.svg";

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 100px;

  /* phone */
  @media (max-width: 600px) {
  }
  /* tablet portrait */
  @media (max-width: 900px) {
  }
  /* tablet landscape */
  @media (max-width: 1200px) {
    width: 40rem;
  }
  /* desktop */
  @media (max-width: 1800px) {
  }
  /* >1800px = wide screen */
`;

export default function MainLogo() {
  return (
    <Logo>
      <StaRLogo
        preserveAspectRatio="xMidYMin slice"
        style={{
          width: "100%",
          paddingBottom: "100%",
          height: "1px",
          overflow: "visible",
        }}
      />
    </Logo>
  );
}
