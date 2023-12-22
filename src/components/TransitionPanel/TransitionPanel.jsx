import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";

import useWindowWidth from "hooks/useWindowWidth";

import { ReactComponent as Globe } from "images/svg/global.svg";
import { ReactComponent as ArrowDown } from "images/svg/arrowDown.svg";

import {
  MobileTranslation,
  TraslationButton,
  TraslationItem,
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

  const currentLanguageLabel = languages.find(
    lang => lang.code === currentLanguage
  )?.label;

  return windowWidth === "isMobile" ? (
    <MobileTranslation>
      <Globe />
      <TraslationButton>{t(currentLanguageLabel)}</TraslationButton>
      <ArrowDown />
    </MobileTranslation>
  ) : (
    <TraslationList>
      {languages.map(({ code, label }) => (
        <TraslationItem key={code}>
          <TraslationButton
            onClick={() => {
              changeLanguage(code);
            }}
            disabled={currentLanguage === code}
          >
            {t(label)}
          </TraslationButton>
        </TraslationItem>
      ))}
    </TraslationList>
  );
};

export default TranslationPanel;
