import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationSK from "./locales/sk/translationSK.json";
import translationUA from "./locales/ua/translationUA.json";
import translationRU from "./locales/ru/translationRU.json";

const resources = {
  sk: {
    translation: translationSK,
  },
  ua: {
    translation: translationUA,
  },
  ru: {
    translation: translationRU,
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "sk",
    fallbackLng: "sk",
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18next;
