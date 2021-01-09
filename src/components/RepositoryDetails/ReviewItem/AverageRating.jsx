import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../theme';

const AverageRating = (props) => {
  const rating = props.rating;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    circle: {
      borderWidth: 2,
      borderRadius: 100,
      width: 50,
      height: 50,
      borderColor: theme.colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.dimensions.reviewMargin,

    },
    text: {
      color: theme.colors.primary,
      fontSize: 18,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>{rating}</Text>
      </View>
    </View>

  );
};

export default AverageRating;