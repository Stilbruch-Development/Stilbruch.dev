import React from "react";
import styled from "styled-components";
import { ReactComponent as EmailLogo } from "../visionxEmail.svg";

const Logo = styled.object`
  svg {
    width: 50rem;
    height: 100%;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1));
  }

  /* phone */
  @media (max-width: 600px) {
    svg {
      width: 35rem;
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

export default function Email() {
  return (
    <Logo data-testid="Adress">
      <EmailLogo />
    </Logo>
  );
}
