import styled from 'styled-components/native';

type ButtonProps = {
  color: string,
}

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px;
    background-color: #3590F3;

`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #F8F1F9;
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${props => props.color};

`;
