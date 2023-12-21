import { useTranslation } from "react-i18next";
import {
  Container,
  MainPhotoThumb,
  StyledHeroWrapper,
  StyledList,
  StyledListItem,
  StyledListLink,
  StyledP,
  StyledPSub,
  StyledTitle,
} from "./Hero.styled";
import MainPhoto from "../../images/mainfoto.png";

import { ReactComponent as Phone } from "../../images/svg/phone.svg";
import { ReactComponent as Map } from "../../images/svg/map.svg";
import { ReactComponent as Instagram } from "../../images/svg/insta.svg";
import { ReactComponent as Facebook } from "../../images/svg/facebook.svg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <MainPhotoThumb>
          <img src={MainPhoto} alt="Julia" />
        </MainPhotoThumb>
        <StyledHeroWrapper>
          <h1>So mnou vaše nechty budú dokonalé</h1>
          <StyledList>
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
        </StyledHeroWrapper>
      </Container>
    </section>
  );
};

export default Hero;
