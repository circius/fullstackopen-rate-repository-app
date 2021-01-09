import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import theme from '../theme';

const SubmitButton = (props) => (
  <TouchableOpacity onPress={props.onPress} {...props}>
    <View style={styles.submit}>
      <Text style={styles.submitText}>{props.label}</Text>
    </View>
  </TouchableOpacity>

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