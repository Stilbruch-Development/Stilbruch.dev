import styled from "styled-components";

import React from "react";

export default function MyFlex() {
  const MyFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin: 5rem 0.5rem;
    width: 90rem;
    height: auto;
  `;
  return <MyFlex />;
}
