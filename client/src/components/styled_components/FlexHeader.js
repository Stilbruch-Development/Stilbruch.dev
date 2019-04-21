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
`;

export default FlexHeader;
