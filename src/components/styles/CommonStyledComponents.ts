import styled from 'styled-components/native';
import { PressableProps } from 'react-native';

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

export const SpaceBetweenRow = styled(Row)`
  justify-content: space-between;
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

export const Pressable = styled.Pressable<PressableProps>`
  opacity: ${props => (props.onPressIn ? 0.2 : 1)};
`;

export const PressOpacityView = styled.View<{ pressed: boolean }>`
  background-color: ${props => (props.pressed ? 0.55 : 1)};
`;

export const IconContainer = styled.View``;

export const IconImage = styled.Image<{
  noMargin?: boolean;
  iconSize?: number;
}>`
  margin: ${props => (props.noMargin ? 0 : 10)}px;
  width: ${props => (props.iconSize ? props.iconSize : 24)}px;
  height: ${props => (props.iconSize ? props.iconSize : 24)}px;
`;
