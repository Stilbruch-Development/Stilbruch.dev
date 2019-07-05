import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff0000;
  border-radius: 131px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5) 5px 10px 20px inset;
  background: rgba(0, 0, 0, 0);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 3rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  min-width: 20%;
  height: 3.5rem;
  padding-bottom: 0.2vw;

  :hover {
    background: rgba(95, 95, 95, 0.5);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 5px 10px 20px inset;
    cursor: pointer;
  }

  // phone
  @media (max-width: 600px) {
    font-size: 8rem;
    min-width: 100%;
    height: 8vw;
    margin: 1vw 0 1vw 0;
  }
  // tablet portrait
  @media (max-width: 900px) {
  }

  // tablet landscape
  @media (max-width: 1200px) {
  }

  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

export default StyledLink;
