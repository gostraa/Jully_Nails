import { StyledProImg } from "components/Manicure/Manikure.styled";
import { settingsVariants } from "constants/constants";
import { manikureVariants } from "constants/manikureData";

import {
  SecondaryTitle,
  SliderWrapper,
  StyledSliderVariants,
  StyledWrapper,
} from "./NailShapes.styled";
import { CommonTitle } from "constants/commonStyles";

export const NailShapes = ({ t }) => {
  return (
    <StyledWrapper>
      <CommonTitle>{t("nailShapes")}</CommonTitle>
      <SliderWrapper>
        {manikureVariants.map((variant, index) => {
          const variantKey = Object.keys(variant)[0];
          const images = variant[variantKey];

          return (
            <div key={index}>
              <SecondaryTitle>{t(`${variantKey}`)}</SecondaryTitle>
              <StyledSliderVariants {...settingsVariants}>
                {images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <StyledProImg src={image} alt={`${imageIndex + 1}`} />
                  </div>
                ))}
              </StyledSliderVariants>
            </div>
          );
        })}
      </SliderWrapper>
    </StyledWrapper>
  );
};
