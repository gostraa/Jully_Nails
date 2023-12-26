import { settingsVariants } from "constants/constants";
import { reviews } from "constants/manikureData";

import {
  ReviewsSection,
  StyledReview,
  StyledSliderRewievs,
  Svg,
} from "./Reviews.styled";
import { CommonTitle } from "constants/commonStyles";

const Reviews = ({ t }) => {
  return (
    <ReviewsSection>
      <CommonTitle>{t("reviews")}</CommonTitle>
      <StyledSliderRewievs {...settingsVariants}>
        {reviews.map(comment => (
          <StyledReview>
            <Svg />
            <p className="comment">{t(`${comment.comment}`)}</p>

            <p className="name">{comment.name}</p>
          </StyledReview>
        ))}
      </StyledSliderRewievs>
    </ReviewsSection>
  );
};

export default Reviews;
