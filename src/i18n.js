import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ln from "./locales/ln/translation.json";
import ru from "./locales/ru/translation.json"; // ✅ Russian added

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    la: { translation: ln },
    ru: { translation: ru } // ✅ Russian language
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
