// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import bg from './locales/bg/translation.json';
import el from './locales/el/translation.json';
import it from './locales/it/translation.json';
import ro from './locales/ro/translation.json';
import sq from './locales/sq/translation.json';
import tr from './locales/tr/translation.json';
import de from './locales/de/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    bg: {
      translation: bg,
    },
    el: {
      translation: el,
    },
    it: {
      translation: it,
    },
    ro: {
      translation: ro,
    },
    sq: {
      translation: sq,
    },
    tr: {
      translation: tr,
    },
    de: {
      translation: de,
    },
  },
  lng: 'de', // start language
  fallbackLng: 'de', // Default language if translation is not found
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
