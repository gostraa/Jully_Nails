import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { BackdropModal, Modal, Translation } from "./ModalTranslation.styled";

const modal = document.querySelector("#modal");

const ModalTranslation = ({
  handleBackdropClick,
  handleKeyDown,
  otherLanguage,
  onChange,
  closeModal,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { t } = useTranslation();

  const handleClick = code => {
    onChange(code);
    closeModal();
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BackdropModal onClick={handleBackdropClick}>
        <Modal>
          {otherLanguage.map(({ code, label }) => (
            <Translation key={code} onClick={() => handleClick(code)}>
              {t(label)}
            </Translation>
          ))}
        </Modal>
      </BackdropModal>
    </motion.div>,
    modal
  );
};

export default ModalTranslation;
