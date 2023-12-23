import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { BackdropModal, Modal, Translation } from "./ModalTranslation.styled";

const modal = document.querySelector("#modal");

export default function ModalTranslation({
  handleBackdropClick,
  handleKeyDown,
}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { t } = useTranslation();

  return createPortal(
    <BackdropModal onClick={handleBackdropClick}>
      <Modal>
        <Translation>{t("slv")}</Translation>
        <Translation>{t("rus")}</Translation>
        <Translation>{t("ukr")}</Translation>
      </Modal>
    </BackdropModal>,
    modal
  );
}
