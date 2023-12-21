import { useTranslation } from "react-i18next";
import i18next from "i18next";

const TranslationPanel = () => {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <button
        onClick={() => {
          changeLanguage("sk");
        }}
        disabled={i18next.language === "sk"}
      >
        sk
      </button>
      <button
        onClick={() => {
          changeLanguage("ua");
        }}
        disabled={i18next.language === "ua"}
      >
        ua
      </button>
      <button
        onClick={() => {
          changeLanguage("ru");
        }}
        disabled={i18next.language === "ru"}
      >
        ru
      </button>
    </>
  );
};

export default TranslationPanel;
