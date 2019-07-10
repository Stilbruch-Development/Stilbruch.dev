import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 2rem;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.5);
  background: rgba(24, 24, 24, 0.2);
  color: rgb(255, 0, 0);
  font-size: 3rem;
  font-family: inherit;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  width: 70rem;
  height: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;

  :active {
    outline: none;
    padding: 1.2rem 0 0.8rem 0;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1) !important;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0) !important;
  }

  :focus {
    outline: none;
  }

  :hover {
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
    background: rgba(24, 24, 24, 0.5);
    cursor: pointer;
  }

  ${props =>
    props.buttonBack &&
    css`
      background: rgba(24, 24, 24, 0.3);
      width: 50rem;
      height: 5rem;
    `}

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
    height: 9rem;

    ${props =>
      props.buttonBack &&
      css`
        width: 70vw;
        height: 9rem;
      `}
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape */
  @media (max-width: 1200px) {
  }
  // desktop */
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen */
`;

export default Button;
