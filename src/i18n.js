// i18n.js
import i18next from "i18next";
import en from "./translations/en/translation.json";
import tr from "./translations/tr/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: en,
    },
    tr: {
      global: tr,
    },
  },
});

export default i18next;
