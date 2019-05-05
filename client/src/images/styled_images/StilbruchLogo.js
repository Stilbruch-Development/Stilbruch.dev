import React from "react";
import styled from "styled-components";
import { ReactComponent as StilbruchLogo } from "../stilbruchLogoShort.svg";

const Logo = styled.object`
  svg {
    width: auto;
    height: 1.5em;
    vertical-align: bottom;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1));
  }
`;

export default function NavCancel() {
  return (
    <Logo>
      <StilbruchLogo />
    </Logo>
  );
}
