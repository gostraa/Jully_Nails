import { ReactComponent as ArrowLeftSvg } from "../images/svg/arrowLeft.svg";
import { ReactComponent as ArrowRightSvg } from "../images/svg/arrowRight.svg";

const ArrowRight = ({ currentSlide, slideCount, ...props }) => {
  return <ArrowRightSvg {...props} />;
};

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  return <ArrowLeftSvg {...props} />;
};

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

  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,

  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};

export const settingsVariants = {
  className: "slider center",

  dots: false,
  infinite: true,
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

export const social = [
  { messanger: "Viber", link: "viber://chat/?number=%2B421951508387" },
  { messanger: "WhatsApp", link: "https://wa.me/message/4IGCOM2O7JMCO1" },
  { messanger: "Telegram", link: "https://t.me/Jully_nails" },
];

export const menu = [
  { menu: "manicure" },
  { menu: "nailShapes" },
  { menu: "price" },
  { menu: "diplomes" },
  { menu: "reviews" },
];

export const menuModal = [
  { menu: "price" },
  { menu: "diplomes" },
  { menu: "reviews" },
];

export const menuHeader = [
  { menu: "price" },
  { menu: "diplomes" },
  { menu: "reviews" },
];

export const service = [
  { serviceItem: "manicure", priceItem: "10€" },
  { serviceItem: "manicureWithStrengthening", priceItem: "20-25€" },
  { serviceItem: "buildingUp", priceItem: "30€" },
  { serviceItem: "removalWithout", priceItem: "5€" },
  { serviceItem: "removalWith", priceItem: "2€" },
  { serviceItem: "french", priceItem: "+5€" },
  { serviceItem: "rubbing", priceItem: "+1€" },
  { serviceItem: "stones", priceItem: "1€" },
  { serviceItem: "stickers", priceItem: "free" },
  { serviceItem: "simpleDesign", priceItem: "free" },
];
