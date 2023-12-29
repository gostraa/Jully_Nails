import { useEffect } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { diplomsData } from "constants/manikureData";

import { CommonTitle } from "constants/commonStyles";
import { DiplomThumb, DiplomsSection, DiplomsWrapper } from "./Diploms.styled";

const Diploms = ({ t }) => {
  useEffect(() => {
    const gallery = new SimpleLightbox(".diploms-gallery a", {
      scrollZoomFactor: 0,
    });
    return () => {
      gallery.destroy();
    };
  }, []);

  return (
    <DiplomsSection>
      <CommonTitle>{t("diplomes")}</CommonTitle>
      <DiplomsWrapper className="diploms-gallery">
        {diplomsData.map((diplom, index) => (
          <DiplomThumb key={index}>
            <a href={diplom.original}>
              <img src={diplom.thumbnail} alt="diplome" />
            </a>
          </DiplomThumb>
        ))}
      </DiplomsWrapper>
    </DiplomsSection>
  );
};

export default Diploms;
