import { ReactComponent as ArrowLeft } from "../images/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../images/svg/arrowRight.svg";

export const settings = {
  className: "slider center",

  dots: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  centerMode: true,
  variableWidth: true,

  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,

  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};
