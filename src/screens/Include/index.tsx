import React, {ReactNode, useState} from 'react';
import {Button} from '../../components/Button';
import {useTranslation} from 'react-i18next';

import {Text} from 'react-native';

import {
  Container,
  Input,
  ReleaseType,
  TypeSelect,
  Title,
  TransactionType,
} from './styles';

interface IncludeProps {
  children: ReactNode;
}

export const Include = ({children}: IncludeProps) => {
  const [transactionType, setTransactionType] = useState(false); // ! false deposit  true withdraw

  const {t} = useTranslation();

  return (
    <Container>
      {children}
      <Title>{t('Include your release')}</Title>

      <Input
        placeholder={t('Enter the value of the launch')}
        keyboardType="phone-pad"
      />

      <TypeSelect>
        <ReleaseType onPress={() => setTransactionType(!transactionType)}>
          <TransactionType type={transactionType}>
            {transactionType ? t('Deposit') : t('Withdrawal')}
          </TransactionType>
        </ReleaseType>
      </TypeSelect>
      <Button ButtonTitle={`${t('add')} ➕`} />
    </Container>
  );
};
