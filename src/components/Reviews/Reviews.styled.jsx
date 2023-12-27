import styled from "styled-components";
import Slider from "react-slick";

import { ReactComponent as QuotesSvg } from "../../images/svg/quotes.svg";

export const ReviewsSection = styled.section`
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-bottom: 120px;
  }
`;

export const Svg = styled(QuotesSvg)`
  width: 32px;
  height: 32px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledSliderRewievs = styled(Slider)`
  & .slick-slide > div {
    width: 240px;

    margin: 0 8px;
    @media (min-width: 768px) {
      width: 372px;
    }

    @media (min-width: 1280px) {
      margin: 0 10px;
    }
  }

  & .slick-next {
    width: 10px;
    top: 260px;
    right: 130px;

    @media (min-width: 768px) {
      top: 330px;
      right: 350px;
    }

    @media (min-width: 1280px) {
      width: 20px;
      top: 340px;
      right: 513px;
    }
  }

  & .slick-prev {
    width: 10px;
    top: 260px;
    left: 130px;

    @media (min-width: 768px) {
      top: 330px;
      left: 350px;
    }

    @media (min-width: 1280px) {
      width: 20px;
      top: 340px;
      left: 513px;
    }
  }
`;

export const StyledReview = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;

  height: 233px;
  padding: 24px 16px;

  border-radius: 24px;
  background: var(--light-pink);

  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;

  & .name {
    font-style: italic;
  }

  & .bottomWrap {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  @media (min-width: 768px) {
    height: 300px;

    padding: 16px 48px;

    font-size: 20px;
  }
`;
