import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  ButtonTitle: string;
}

export const Button = ({ButtonTitle, ...props}: ButtonProps) => {
  return (
    <Container {...props}>
      <Title>{ButtonTitle}</Title>
    </Container>
  );
};
