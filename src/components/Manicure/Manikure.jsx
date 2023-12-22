import { StyledSlideDiv, StyledSlideList } from "./Manicure.styled";
import { ReactComponent as ArrowLeft } from "../../images/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/svg/arrowRight.svg";

import { manikureImg } from "constants/manikureData";

const Manikure = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  return (
    <div>
      <StyledSlideList {...settings}>
        {manikureImg.map((img, idx) => {
          return (
            <StyledSlideDiv key={idx}>
              <img src={img} alt="manikure" />
            </StyledSlideDiv>
          );
        })}
      </StyledSlideList>
    </div>
  );
};

export default Manikure;
