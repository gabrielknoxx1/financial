import React from 'react';
import {TouchableWithoutFeedbackProps} from 'react-native';

import {Container, Title, Value, Content} from './styles';

export interface CardProps extends TouchableWithoutFeedbackProps {
  type: 'Incomes' | 'Withdraws';
  title: string;
}

export const Card = ({type, title, ...props}: CardProps) => {
  return (
    <Content {...props}>
      <Container type={type}>
        <Title>{title}</Title>
        <Value>R$ 1805,33</Value>
      </Container>
    </Content>
  );
};
