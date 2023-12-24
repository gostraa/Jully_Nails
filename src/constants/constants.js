import { ReactComponent as ArrowLeft } from "../images/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../images/svg/arrowRight.svg";

export const settings = {
  className: "slider center",
  lazyLoading: true,
  dots: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  centerMode: true,
  variableWidth: true,

  // autoplay: true,
  // autoplaySpeed: 2000,
  // pauseOnHover: true,

  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};

export const settingsVariants = {
  className: "slider center",

  dots: false,
  infinite: false,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  centerMode: true,
  variableWidth: true,

  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
