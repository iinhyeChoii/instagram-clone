import * as React from 'react';
import { IconContainer, IconImage } from './styles/CommonStyledComponents';
import { IconSourceTypes } from '../interfaces';

const Icon = ({
  iconSource,
  noMargin,
  iconSize,
}: {
  iconSource: IconSourceTypes;
  noMargin?: boolean;
  iconSize?: number;
}) => {
  return (
    <IconContainer>
      <IconImage source={iconSource} noMargin={noMargin} iconSize={iconSize} />
    </IconContainer>
  );
};

export { Icon };
