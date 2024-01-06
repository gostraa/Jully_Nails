import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import ModalTranslation from "components/ModalTranslation/ModalTranslation";

import useWindowWidth from "hooks/useWindowWidth";
import useToggleModal from "hooks/useToggleModal";

import { ReactComponent as ArrowDown } from "images/svg/arrowDown.svg";

import {
  Globe,
  MobileTranslation,
  TraslationButton,
  TraslationList,
} from "./TransitionPanel.styled";

const TranslationPanel = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const windowWidth = useWindowWidth();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  useEffect(() => {
    setCurrentLanguage(i18next.language);
  }, []);

  let languages = [
    { code: "sk", label: "slv" },
    { code: "ua", label: "ukr" },
    { code: "ru", label: "rus" },
  ];

  languages = languages.sort((a, b) =>
    a.code === currentLanguage ? -1 : b.code === currentLanguage ? 1 : 0
  );

  const currentLanguageLabel =
    languages.find(lang => lang.code === currentLanguage) || languages[0];

  const otherLanguage = languages.filter(lang => lang.code !== currentLanguage);

  const { isOpen, openModal, handleKeyDown, closeModal, handleBackdropClick } =
    useToggleModal();

  return windowWidth !== "isDesktop" ? (
    <>
      <MobileTranslation onClick={() => openModal()}>
        <Globe />
        <TraslationButton>{t(currentLanguageLabel?.label)}</TraslationButton>
        <ArrowDown />
      </MobileTranslation>
      <AnimatePresence>
        {isOpen && (
          <ModalTranslation
            handleKeyDown={handleKeyDown}
            handleBackdropClick={handleBackdropClick}
            otherLanguage={otherLanguage}
            onChange={changeLanguage}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  ) : (
    <TraslationList>
      {languages.map(({ code, label }) => (
        <li key={code}>
          <TraslationButton
            onClick={() => {
              changeLanguage(code);
            }}
            disabled={currentLanguage === code}
          >
            {t(label)}
          </TraslationButton>
        </li>
      ))}
    </TraslationList>
  );
};

export default TranslationPanel;
