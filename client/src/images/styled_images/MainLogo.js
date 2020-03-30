import React from "react";
import styled from "styled-components";
import { ReactComponent as VisionXLogo } from "../VisionX.svg";

const Logo = styled.object`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }

  svg {
    width: 4rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1));
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

export default function MainLogo() {
  return (
    <Logo>
      <canvas></canvas>
      <VisionXLogo className="navChange" />
    </Logo>
  );
}
