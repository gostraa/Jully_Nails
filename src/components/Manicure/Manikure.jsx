import { useTranslation } from "react-i18next";

import { settings } from "constants/constants";
import { manikureImg } from "constants/manikureData";

import {
  StyledProImg,
  StyledSlideDiv,
  StyledSlideList,
  StyledWrapper,
} from "./Manikure.styled";

const Manikure = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <h2>{t("manicure")}</h2>
      <StyledSlideList {...settings}>
        {manikureImg.map((img, idx) => {
          return (
            <StyledSlideDiv key={idx}>
              <StyledProImg src={img} alt="manikure" />
            </StyledSlideDiv>
          );
        })}
      </StyledSlideList>
    </StyledWrapper>
  );
};

export default Manikure;
