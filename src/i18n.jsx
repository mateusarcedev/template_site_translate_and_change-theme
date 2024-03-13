import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n.use(initReactI18next).init({
  lng: "pt", // definir linguagem inicial
  fallbackLng: "en", // definir idioma de fallback
  resources: {
    en: {
      translation: enTranslation, // alterado de enTranslation para translation
    },
    pt: {
      translation: ptTranslation, // alterado de ptTranslation para translation
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
