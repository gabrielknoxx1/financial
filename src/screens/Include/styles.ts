import styled from 'styled-components/native';

type TransactionType = {
  type: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 16px 32px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-align: center;
  color: #479af4;
  font-size: 20px;
  margin: 16px 0;
`;
export const TransactionType = styled.Text<TransactionType>`
  text-align: center;
  color: ${props => (props.type ? '#2CDC18' : '#B4415C')};
  font-size: 20px;
  margin: 16px 0;
`;

export const Input = styled.TextInput`
  border: 1px solid #000;
  margin: 16px 0;
  padding: 16px;
  border-radius: 16px;
  color: #e0e2f5;
`;

export const TypeSelect = styled.View`
  flex: 1;
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ReleaseType = styled.TouchableWithoutFeedback`
  border: 1px solid #000;
`;
