import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import Text from '../Text';


const styles = StyleSheet.create({
  container: {
    padding: 3,
    alignSelf: 'flex-start',
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: 'white',
  }
});

const Badge = ({ label }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

export default Badge;