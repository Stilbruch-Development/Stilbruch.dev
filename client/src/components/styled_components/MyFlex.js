import styled from "styled-components";

const MyFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 5rem 0.5rem;
  width: 90rem;
  height: auto;

  // phone
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
  }
  // tablet portrait
  @media (max-width: 900px) {
  }

  // tablet landscape */
  @media (max-width: 1200px) {
  }

  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen */
`;

export default MyFlex;
