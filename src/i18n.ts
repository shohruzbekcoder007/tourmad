import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import uz from './locales/uz/translations.json'
import ru from './locales/ru/translations.json'
import en from './locales/en/translations.json'
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        ru: {
          translation: ru,
        },
        uz: {
          translation: uz,
        },
        en: {
          translation: en,
        },
      },
    fallbackLng: 'uz',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;