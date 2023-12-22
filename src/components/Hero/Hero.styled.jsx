import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 0 50px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 148px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 46px;
    max-width: 1280px;
    padding: 0 130px;
  }
`;

export const MainPhotoThumb = styled.div`
  margin-bottom: 20px;
  & img {
    width: 220px;

    @media screen and (min-width: 768px) {
      width: 472px;
    }
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h1 {
    text-align: center;
    font-family: var(--secondary-font);
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    & h1 {
      font-size: 48px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
    & h1 {
      font-size: 60px;
      text-align: left;
      width: 536px;
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & li {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media screen and (min-width: 768px) {
    & li {
      gap: 8px;
    }
  }
`;

export const StyledListLink = styled.a`
  color: var(--primary-text-color);
  font-size: 12px;
  line-height: 1.16;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledPSub = styled.p`
  text-align: right;
  font-size: 8px;
  line-height: 1.25;

  margin-top: 3px;

  @media screen and (min-width: 768px) {
    margin-top: 6, 5px;
    font-size: 12px;
  }
`;
