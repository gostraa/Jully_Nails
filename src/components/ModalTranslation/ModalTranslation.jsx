import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

const modal = document.querySelector("#modal");

export default function ModalTranslation(
  handleBackdropClick = () => {},
  handleKeyDown = () => {},
  closeModal = () => {}
) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { t } = useTranslation();

  return createPortal(<div></div>, modal);
}
