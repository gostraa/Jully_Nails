import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledSlideList = styled(Slider)`
  margin-bottom: 40px;

  & .slick-next {
    top: 309px;
    right: 110px;
  }

  & .slick-prev {
    top: 309px;
    left: 110px;
  }
`;

export const StyledSlideDiv = styled.div`
  width: 240px;
  height: 283px;
  margin: 0 10px;
`;
