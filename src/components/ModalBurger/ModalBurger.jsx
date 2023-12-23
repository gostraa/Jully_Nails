import React, { useEffect } from "react";
import { BackdropModal, CrossButton } from "./ModalBurger.styled";
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

  const menu = [{ menu: "diplomes" }, { menu: "price" }, { menu: "reviews" }];

  return createPortal(
    <BackdropModal onClick={handleBackdropClick}>
      {menu.map(({ menu }) => (
        <ul key={menu}>
          <li>{t(menu)}</li>
        </ul>
      ))}
      <CrossButton onClick={closeModal} />
    </BackdropModal>,
    modal
  );
};

export default ModalBurger;
