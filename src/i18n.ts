import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./locales/uz/translations.json";
import ru from "./locales/ru/translations.json";
import en from "./locales/en/translations.json";

// Define the shape of your translation resources
type TranslationResources = {
  en: typeof en;
  uz: typeof uz;
  ru: typeof ru;
};

// Configure i18next with type checking on resources
i18n.use(initReactI18next).init<TranslationResources>({
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    ru: { translation: ru },
  },
  lng: "uz", // Default language
  fallbackLng: "uz", // Fallback language if the current language is not available
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
