import * as React from 'react';
import { Text, Pressable } from './styles';
import { GestureResponderEvent, Image } from 'react-native';
import { Icon } from './Icon';
import { IconSourceTypes } from '../interfaces';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const IconButton = (props: {
  iconSource: IconSourceTypes;
  onPress: (event: GestureResponderEvent) => void;
  noMargin?: boolean;
  iconSize?: number;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <Icon {...props} />
    </Pressable>
  );
};

const TextButton = (props: {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={{ color: props.color }}>{props.children}</Text>
    </Pressable>
  );
};

export { IconButton, TextButton };
