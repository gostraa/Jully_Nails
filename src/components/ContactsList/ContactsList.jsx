import {
  Facebook,
  Instagram,
  Map,
  Phone,
  StyledList,
  StyledListLink,
  StyledPSub,
} from "components/Hero/Hero.styled";

const ContactsList = ({ isFooter }) => {
  return (
    <StyledList isFooter={isFooter}>
      <li>
        <div>
          <Phone />
        </div>
        <div>
          <StyledListLink href="tel:+421 951 508 387">
            +421 951 508 387
          </StyledListLink>
          <StyledPSub>Viber, WhatsApp, Telegram</StyledPSub>
        </div>
      </li>
      <li>
        <div>
          <Map />
        </div>
        <StyledListLink
          href="https://www.google.com/maps?q=Jeruzalemská 324/33, 91701 Trnava"
          target="_blank"
          rel="noreferrer"
        >
          Jeruzalemská 324/33, 91701 Trnava
        </StyledListLink>
      </li>
      <li>
        <div>
          <Instagram />
        </div>
        <StyledListLink>jully_kasianenko_nails</StyledListLink>
      </li>
      <li>
        <div>
          <Facebook />
        </div>
        <StyledListLink>JullyKasianenko Manikurá Trnava</StyledListLink>
      </li>
    </StyledList>
  );
};

export default ContactsList;
