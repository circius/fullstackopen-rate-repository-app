import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../theme';

const SubmitButton = () => (
  <View style={styles.submit}>
    <Text style={styles.submitText}>Sign in</Text>
  </View>
);


const styles = StyleSheet.create({
  submit: {
    height: theme.spacings.formLineHeight,
    margin: theme.spacings.formMargin,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.rounding.borderRadius,
    backgroundColor: theme.colors.primary,
  },
  submitText: {
    color: theme.colors.buttonText,
    fontWeight: theme.fontWeights.bold
  }
});


export default SubmitButton;