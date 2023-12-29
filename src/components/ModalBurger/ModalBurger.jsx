import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

import {
  BackdropModal,
  CrossButton,
  BurgerMenu,
  MenuList,
} from "./ModalBurger.styled";

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
      <BurgerMenu>
        <MenuList>
          {menu.map(({ menu }) => (
            <li>{t(menu)}</li>
          ))}
        </MenuList>
        <CrossButton onClick={closeModal} />
      </BurgerMenu>
    </BackdropModal>,
    modal
  );
};

export default ModalBurger;
