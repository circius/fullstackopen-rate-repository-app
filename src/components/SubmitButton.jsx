import React from 'react';
import Button from './Button';

import theme from '../theme';

const SubmitButton = (props) => {
  const { onPress, label } = props;
  return (
    <Button
      bgColor={theme.colors.primary}
      onPress={onPress}
      label={label}
      {...props}
    />
  );
};

export default SubmitButton;