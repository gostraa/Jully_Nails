import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledWrapper = styled.section`
  width: 320px;
  margin: 0 auto;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    width: 768px;
    padding-bottom: 80px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 136px 120px 136px;
  }

  h2 {
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
  }
`;

export const StyledSlideList = styled(Slider)`
  margin-bottom: 50px;

  @media (min-width: 1280px) {
    & .slick-slide div {
      width: 240px;
      height: 283px;
      transition: transform 0.3s;
    }

    & .slick-current div {
      transform: scale(1.25);
    }

    & .slick-slide {
      padding: 0 70px;
    }

    & .slick-track {
      display: flex;
      align-items: center;
    }

    & .slick-list,
    .slick-track {
      min-height: 472px;
    }
  }

  & .slick-next {
    width: 10px;
    top: 292px;
    right: 130px;

    @media (min-width: 768px) {
      top: 420px;
      right: 350px;
    }

    @media (min-width: 1280px) {
      width: 20px;
      top: 490px;
      right: 459px;
    }
  }

  & .slick-prev {
    width: 10px;
    top: 292px;
    left: 130px;

    @media (min-width: 768px) {
      top: 420px;
      left: 350px;
    }

    @media (min-width: 1280px) {
      width: 20px;
      top: 490px;
      left: 459px;
    }
  }
`;

export const StyledSlideDiv = styled.div`
  height: 273px;
  padding: 0 8px;
  transition: transform 0.3s;

  @media (min-width: 768px) {
    height: 396px;
  }

  @media (min-width: 1280px) {
    padding: 4px;
    border: 1px solid rgba(160, 94, 92, 0.8);
  }

  &.slick-center {
    transform: scale(1.25);
  }
`;

export const StyledProImg = styled.img`
  width: 100%;
  height: 100%;
`;
