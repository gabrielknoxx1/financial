import styled from 'styled-components/native';

interface CardProps {
  type: 'Incomes' | 'Withdraws';
}

export const Container = styled.View<CardProps>`
  border: 2px solid #00000050;
  width: 100%;
  height: auto;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
  align-items: center;
  background-color: ${props => props.type === 'Incomes' ?  '#2e7d32' : '#f44336'};

`;

export const Content = styled.TouchableWithoutFeedback`

`;

export const Title = styled.Text`
font-size: 20px;
font-weight: 600;
margin: 16px;
color: #f8f1f0
`;

export const Value = styled.Text`
font-size: 32px;
font-weight: 600;
margin: 16px;
`;
