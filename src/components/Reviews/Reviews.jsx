import { settingsVariants } from "constants/constants";
import { reviews } from "constants/manikureData";

import {
  ReviewsSection,
  StyledReview,
  StyledSliderRewievs,
  Svg,
} from "./Reviews.styled";
import { CommonTitle } from "constants/commonStyles";
import Avatar from "../../images/avatar.jpg";

const Reviews = ({ t }) => {
  return (
    <ReviewsSection>
      <CommonTitle>{t("reviews")}</CommonTitle>
      <StyledSliderRewievs {...settingsVariants}>
        {reviews.map((comment, index) => (
          <StyledReview key={index}>
            <div>
              <Svg />
              <p className="comment">{t(`${comment.comment}`)}</p>
            </div>
            <div className="bottomWrap">
              <img src={Avatar} alt="avatar" />
              <p className="name">{comment.name}</p>
            </div>
          </StyledReview>
        ))}
      </StyledSliderRewievs>
    </ReviewsSection>
  );
};

export default Reviews;
