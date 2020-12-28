import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  }
});

const Stat = ({ label, value }) => (
  <View style={styles.container}>
    <Text fontWeight='bold'>{value}</Text>
    <Text>{label}</Text>
  </View>
);

export default Stat;