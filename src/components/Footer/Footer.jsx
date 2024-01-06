import { Link } from "react-scroll";

import ContactsList from "components/ContactsList/ContactsList";
import { menu } from "constants/constants";

import {
  FooterBackground,
  FooterContainer,
  FooterNav,
  FooterNavItem,
  Logo,
} from "./Footer.styled";

const Footer = ({ t }) => {
  const footerMenu = menu;

  return (
    <FooterBackground>
      <FooterContainer>
        <Logo />
        <FooterNav>
          {footerMenu.map(({ menu }, idx) => (
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
