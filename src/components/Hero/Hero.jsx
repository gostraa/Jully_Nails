import { useTranslation } from "react-i18next";

import { Container, MainPhotoThumb, StyledHeroWrapper } from "./Hero.styled";
import MainPhoto from "../../images/mainfoto.png";
import ContactsList from "components/ContactsList/ContactsList";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <MainPhotoThumb>
          <img src={MainPhoto} alt="Julia" />
        </MainPhotoThumb>
        <StyledHeroWrapper>
          <h1>{t("heroTitle")}</h1>
          <ContactsList />
        </StyledHeroWrapper>
      </Container>
    </section>
  );
};

export default Hero;
