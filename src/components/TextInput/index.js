import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  main: {
    height: theme.spacings.formLineHeight,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    margin: theme.spacings.formMargin,
    borderRadius: theme.rounding.borderRadius
  },
  error: {
    borderColor: theme.colors.errors
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    styles.main,
    error ? styles.error : undefined
  ];

  return <NativeTextInput
    style={textInputStyle}
    {...props}

  />;
};

export default TextInput;