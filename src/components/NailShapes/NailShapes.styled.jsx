import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledWrapper = styled.section`
  max-width: 375px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 80px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;

    padding-bottom: 120px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media (min-width: 1280px) {
    gap: 60px;
  }
`;

export const StyledSliderVariants = styled(Slider)`
  & .slick-slide div {
    width: 256px;
    height: 320px;
    padding: 0 4px;
    transition: transform 0.3s;

    @media (min-width: 768px) {
      width: 344px;
      height: 448px;
    }

    @media (min-width: 1280px) {
      width: 393px;
      height: 498px;
      padding: 0 5px;
    }
  }
  & .slick-next {
    width: 10px;
    top: 347px;
    right: 130px;

    @media (min-width: 768px) {
      top: 473px;
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
    top: 347px;
    left: 130px;

    @media (min-width: 768px) {
      top: 473px;
      left: 350px;
    }

    @media (min-width: 1280px) {
      width: 20px;
      top: 490px;
      left: 459px;
    }
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;
