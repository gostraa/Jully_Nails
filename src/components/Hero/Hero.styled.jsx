import styled from "styled-components";

import { ReactComponent as PhoneSVG } from "../../images/svg/phone.svg";
import { ReactComponent as MapSVG } from "../../images/svg/map.svg";
import { ReactComponent as InstagramSVG } from "../../images/svg/insta.svg";
import { ReactComponent as FacebookSVG } from "../../images/svg/facebook.svg";

const createStyledIcon = IconSVG => styled(IconSVG)`
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Phone = createStyledIcon(PhoneSVG);
export const Map = createStyledIcon(MapSVG);
export const Instagram = createStyledIcon(InstagramSVG);
export const Facebook = createStyledIcon(FacebookSVG);

export const Container = styled.section`
  margin: 0 auto;
  max-width: 320px;
  padding: 0 50px 60px 50px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    max-width: 768px;
    padding: 0 148px 80px 148px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 46px;
    max-width: 1280px;
    padding: 0 130px 0px 130px;
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
  align-items: ${({ $isFooter }) => ($isFooter ? "center" : "normal")};

  & li {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
  }

  & li:first-child > :last-child {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    align-items: normal;

    & li {
      gap: 8px;
    }
  }

  @media (min-width: 1280px) {
    & li {
      gap: 16px;
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

export const StyledPSub = styled.ul`
  text-align: right;
  font-size: 12px;
  line-height: 1.25;
  margin-top: 3px;
  display: flex;

  gap: 8px;
  align-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 15%;

  @media screen and (min-width: 768px) {
    margin-top: 6, 5px;
    font-size: 16px;
    margin-left: 10%;
  }
`;

export const StyledLinks = styled.a`
  color: var(--primary-text-color);
  padding: 5px;
  border-radius: 10px;
  transition: all 0.5s ease;

  &:nth-child(1):hover,
  &:nth-child(1):focus {
    border-radius: 10px;
    background-color: var(--viber);
    box-shadow: 0 0 10px var(--viber);
    transition: all 0.5s ease;
    color: var(--light-white);
  }

  &:nth-child(2):hover,
  &:nth-child(2):focus {
    border-radius: 10px;
    background-color: var(--whatsapp);
    box-shadow: 0 0 10px var(--whatsapp);
    transition: all 0.5s ease;
    color: var(--light-white);
  }

  &:nth-child(3) {
    @media (min-width: 768px) {
      margin-bottom: 12px;
    }
  }

  &:nth-child(3):hover,
  &:nth-child(3):focus {
    border-radius: 10px;
    background-color: var(--telegram);
    box-shadow: 0 0 10px var(--telegram);
    transition: all 0.5s ease;
    color: var(--light-white);
  }
`;
