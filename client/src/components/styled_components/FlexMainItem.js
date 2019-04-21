import styled from "styled-components";

const FlexMainItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 2rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8) 5px 10px 20px inset;
  background: rgba(255, 0, 0, 0);
  color: #ff0000;
  font-size: 4rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  min-width: 90%;
`;

export default FlexMainItem;
