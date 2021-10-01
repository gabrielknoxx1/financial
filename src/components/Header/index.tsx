import React from 'react';
import {useTranslation} from 'react-i18next';

import {NativeModules} from 'react-native';

import {Container, Button, Text} from './styles';

interface HeaderProps {
  children: ReactNode;
}

export const Header = () => {
  const {t, i18n} = useTranslation();

  return (
    <Container>
      <Text>{t('languages')}</Text>
      <Button
        color="#1b5e20"
        onPress={() => {
          i18n.changeLanguage('pt');
          // NativeModules.DevSettings.reload();
        }}>
        <Text>pt-BR 🇧🇷</Text>
      </Button>
      <Button
        color="#d50000"
        onPress={() => {
          i18n.changeLanguage('en');
          // NativeModules.DevSettings.reload();
        }}>
        <Text>en-US 🇺🇸</Text>
      </Button>
    </Container>
  );
};
