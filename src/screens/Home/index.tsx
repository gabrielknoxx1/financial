import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Text} from 'react-native';
import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
import {Header} from '../../components/Header';
import {Include} from '../Include';

import {Container, Content} from './styles';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {t} = useTranslation();
  return (
    <Container>
      <Header />
      {isOpen ? (
        <>
          <Content>
            <Card type="Incomes" title={t('incomes')} />
            <Card type="Withdraws" title={t('withdraw')} />
          </Content>
          <Button
            ButtonTitle={`${t('add')} 💵`}
            onPress={() => setIsOpen(false)}
          />
        </>
      ) : (
        <Include>
          <Button
            ButtonTitle={`${t('cancel')} ❌`}
            onPress={() => setIsOpen(true)}
          />
        </Include>
      )}
    </Container>
  );
};
