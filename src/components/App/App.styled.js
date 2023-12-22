import styled from "styled-components";

export const MainContainer = styled.main`
  width: 320px;
  padding: 16px 16px 30px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 16px 40px 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 32px 60px 24px;
  }
`;
