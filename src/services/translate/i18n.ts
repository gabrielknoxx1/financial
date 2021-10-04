import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import backend from 'i18next-http-backend';

i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en',
    supportedLngs: ['en', 'pt'],
    backend: {
      loadPath:
        'https://localise.biz:443/api/export/locale/{{lng}}.json?key=6_wMa_dOKYbs0kghT-qkH-f5nV-HvBOP',
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
