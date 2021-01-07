import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../theme';

const AverageRating = ({ rating }) => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 3,
      borderRadius: 100,
      width: 50,
      height: 50,
      borderColor: theme.colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: theme.colors.primary,
      fontSize: 18
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{rating}</Text>
    </View>
  );
};

export default AverageRating;