import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en';
import vi from './locales/vi';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'vi',
  fallbackLng: 'vi',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

export default i18next;
