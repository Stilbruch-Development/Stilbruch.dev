import styled from "styled-components";

const FlexHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  font-size: 4.5rem;
  letter-spacing: 1.5vh;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-shadow: -5px -5px 10px rgba(0, 0, 0, 1);
  color: #ff0000;
  margin: 0;

  /* phone */
  @media (max-width: 600px) {
    font-size: 12rem;
    letter-spacing: unset;
    writing-mode: unset;
    transform: unset;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
    margin-bottom: 4rem;
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

export default FlexHeader;
