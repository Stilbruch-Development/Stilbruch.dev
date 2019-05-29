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
`;

export default function Main() {
  return (
    <MainFlex data-test="Main_Component">
      <Landing />
      <BoxE />
      <BoxP />
      <BoxS />
      <BoxK />
    </MainFlex>
  );
}
