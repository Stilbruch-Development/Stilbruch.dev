import styled from "styled-components";

const TermsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8) 5px 10px 20px inset;
  background: rgba(255, 0, 0, 0);
  color: #ff0000;
  font-size: 4rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin: 5rem 10rem;
  padding-bottom: 0.9em;
  min-height: 65vh;
  line-height: 4rem;

  h1 {
    font-size: 1em;
  }

  h2 {
    font-size: 0.8em;
    font-weight: bold;
  }

  a {
    text-decoration: underline;
    color: inherit;
    font-family: inherit;
  }

  p {
    font-size: 0.6em;
    margin: 1.4rem 0;
  }

  .bold {
    font-size: 0.7em;
    font-weight: bold;
    margin-top: 3rem;
  }

  // phone
  @media (max-width: 600px) {
    font-size: 7rem;
    line-height: 7rem;
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

const MainText = styled.div`
  width: 95%;
`;

export { TermsMain, MainText };
