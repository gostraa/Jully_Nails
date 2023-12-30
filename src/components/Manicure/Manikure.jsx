import { settings } from "constants/constants";
import { manikureImg } from "constants/manikureData";

import {
  StyledProImg,
  StyledSlideDiv,
  StyledSlideList,
  StyledWrapper,
} from "./Manikure.styled";
import { CommonTitle } from "constants/commonStyles";

const Manikure = ({ t }) => {
  return (
    <StyledWrapper id="manicure">
      <CommonTitle>{t("manicure")}</CommonTitle>
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
