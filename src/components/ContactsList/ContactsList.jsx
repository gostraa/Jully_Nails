import { social } from "constants/constants";

import {
  Facebook,
  Instagram,
  Map,
  Phone,
  StyledList,
  StyledListLink,
  StyledPSub,
  StyledLinks,
} from "components/Hero/Hero.styled";

const ContactsList = ({ $isFooter }) => {
  const socialLink = social;

  return (
    <StyledList $isFooter={$isFooter}>
      <li>
        <div>
          <Phone />
        </div>
        <StyledListLink
          href="tel:+421 951 508 387"
          target="_blank"
          rel="noopener noreferrer"
        >
          +421 951 508 387
        </StyledListLink>
        <StyledPSub>
          {socialLink.map(({ messanger, link }, idx) => (
            <StyledLinks
              href={link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              {messanger}
            </StyledLinks>
          ))}
        </StyledPSub>
      </li>
      <li>
        <div>
          <Map />
        </div>
        <StyledListLink
          href="https://maps.app.goo.gl/ULNcxKs5CadDUwkj7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Štefánikova 21/111 917 01, Trnava
        </StyledListLink>
      </li>
      <li>
        <div>
          <Instagram />
        </div>
        <StyledListLink
          href="https://www.instagram.com/jully_kasianenko_nails?igsh=a25kc2hxZ3p5NXo4&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          jully_kasianenko_nails
        </StyledListLink>
      </li>
      <li>
        <div>
          <Facebook />
        </div>
        <StyledListLink
          href="https://www.facebook.com/profile.php?id=100020289960225"
          target="_blank"
          rel="noopener noreferrer"
        >
          JullyKasianenko Manikurá Trnava
        </StyledListLink>
      </li>
    </StyledList>
  );
};

export default ContactsList;
