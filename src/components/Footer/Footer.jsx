import { Link } from "react-scroll";

import ContactsList from "components/ContactsList/ContactsList";

import {
  FooterBackground,
  FooterContainer,
  FooterNav,
  FooterNavItem,
  Logo,
} from "./Footer.styled";

const Footer = ({ t }) => {
  const menu = [
    { menu: "manicure" },
    { menu: "nailShapes" },
    { menu: "diplomes" },
    { menu: "price" },
    { menu: "reviews" },
  ];

  return (
    <FooterBackground>
      <FooterContainer>
        <Logo />
        <FooterNav>
          {menu.map(({ menu }, idx) => (
            <Link
              activeClass="active"
              to={menu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              key={idx}
            >
              <FooterNavItem>{t(menu)}</FooterNavItem>
            </Link>
          ))}
        </FooterNav>
        <ContactsList $isFooter={true} />
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
