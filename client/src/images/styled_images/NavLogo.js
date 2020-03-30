import React from "react";
import styled from "styled-components";
import { ReactComponent as VXLogo } from "../VisionX.svg";

const Logo = styled.object`
  svg {
    height: 1em;
    margin-top: 1rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1));
  }

  /* phone */
  @media (max-width: 600px) {
    svg {
      height: 1em;
      margin-top: 3rem;
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

export default function NavLogo() {
  return (
    <Logo>
      <VXLogo />
    </Logo>
  );
}
