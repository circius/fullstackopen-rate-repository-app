import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  main: {
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    margin: 10,
    borderRadius: theme.rounding.borderRadius
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.main];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;