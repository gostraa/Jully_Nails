import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import {
  BackdropModal,
  CrossButton,
  BurgerMenu,
  MenuList,
  MenuItem,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BackdropModal onClick={handleBackdropClick}>
        <BurgerMenu>
          <MenuList>
            {menu.map(({ menu }, index) => (
              <MenuItem key={index}>{t(menu)}</MenuItem>
            ))}
          </MenuList>
          <CrossButton onClick={closeModal} />
        </BurgerMenu>
      </BackdropModal>
    </motion.div>,
    modal
  );
};

export default ModalBurger;
