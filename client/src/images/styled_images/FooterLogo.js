import React from "react";
import styled from "styled-components";
import { ReactComponent as TLogo } from "../tLogo.svg";

const Logo = styled.object`
  svg {
    margin-top: 1rem;
    margin-right: 2rem;
    height: 6rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.7));
  }

  /* phone */
  @media (max-width: 600px) {
    svg {
      height: 12rem;
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

export default function FooterLogo() {
  return (
    <Logo>
      <TLogo />
    </Logo>
  );
}
