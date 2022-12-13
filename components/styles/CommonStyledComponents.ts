import styled from 'styled-components/native';

/**
 * [ Common ]
 */
export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
`;

export const View = styled.View`
  background-color: ${props => props.theme.colors.background};
`;
