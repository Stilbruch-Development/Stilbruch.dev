import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 2rem;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.5);
  background: rgba(95, 95, 95, 0.5);
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
    cursor: pointer;
  }

  ${props =>
    props.buttonBack &&
    css`
      background: rgb(24, 24, 24, 0.3);
      width: 50rem;
      height: 5rem;
    `}
`;

export default Button;
