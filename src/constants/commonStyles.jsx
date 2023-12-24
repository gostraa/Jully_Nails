import styled from "styled-components";

export const CommonTitle = styled.h2`
  margin-bottom: 24px;

  color: var(--primary-text-color);
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;

  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;
    font-size: 56px;
  }
`;
