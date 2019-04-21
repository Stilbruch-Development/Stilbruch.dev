import styled, { css } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ff0000;
  border-radius: 131px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8) 5px 10px 20px inset;
  background: rgba(0, 0, 0, 0);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 3rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  min-width: 20%;
  height: 3.5rem;
  padding-bottom: 0.2vw;

  img {
    height: 100%;
    margin-top: 1rem;
  }

  :hover {
    background: rgba(95, 95, 95, 0.7);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  ${props =>
    props.navLogo &&
    css`
      min-width: 10%;
    `}
`;

export default StyledLink;
