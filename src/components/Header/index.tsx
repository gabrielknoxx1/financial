import React from 'react';
import {useTranslation} from 'react-i18next';

import {Container, Button, Text} from './styles';

export const Header = () => {
  const {t, i18n} = useTranslation();

  return (
    <Container>
      <Text>{t('languages')}</Text>
      <Button color="#1b5e20" onPress={() => i18n.changeLanguage('pt')}>
        <Text>pt-BR 🇧🇷</Text>
      </Button>
      <Button color="#d50000" onPress={() => i18n.changeLanguage('en')}>
        <Text>en-US 🇺🇸</Text>
      </Button>
    </Container>
  );
};
