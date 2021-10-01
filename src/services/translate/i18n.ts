import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import {languages} from './languages';

const resources = {
  en: {
    translation: languages.en,
  },
};
i18n
  .use(ChainedBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources,
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns, clb) => {
          import(`./locales/${lng}/${ns}.json`)
            .then(resources => clb(null, resources))
            .catch(clb);
        }),
      ],
      backendOptions: [
        {
          loadPath:
            'https://localise.biz:443/api/export/all.json?key=6_wMa_dOKYbs0kghT-qkH-f5nV-HvBOP',
        },
      ],
    },
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
