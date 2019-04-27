import React from "react";
import styled from "styled-components";
import Landing from "./Landing";
import BoxE from "./BoxE";
import BoxP from "./BoxP";
import BoxS from "./BoxS";
import BoxK from "./BoxK";

const MainFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* phone */
  @media (max-width: 600px) {
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

export default function Main() {
  return (
    <MainFlex>
      <Landing />
      <BoxE />
      <BoxP />
      <BoxS />
      <BoxK />
    </MainFlex>
  );
}
