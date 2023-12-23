import React, { useEffect } from "react";
import { BackdropModal } from "./ModalBurger.styled";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

const modal = document.querySelector("#modal");

const ModalBurger = ({ handleBackdropClick, handleKeyDown, closeModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { t } = useTranslation();

  return createPortal(
    <BackdropModal onClick={handleBackdropClick}>
      <div>ModalBurger</div>
    </BackdropModal>,
    modal
  );
};

export default ModalBurger;
