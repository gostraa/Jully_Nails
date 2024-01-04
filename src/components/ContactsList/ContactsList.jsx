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
  const social = [
    { messanger: "Viber", link: "viber://chat?number=%2B421951508387" },
    { messanger: "WhatsApp", link: "#" },
    { messanger: "Telegram", link: "#" },
  ];

  return (
    <StyledList $isFooter={$isFooter}>
      <li>
        <div>
          <Phone />
        </div>
        <StyledListLink href="tel:+421 951 508 387">
          +421 951 508 387
        </StyledListLink>
        <StyledPSub>
          {social.map(({ messanger, link }, idx) => (
            <StyledLinks href={link} key={idx}>
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
