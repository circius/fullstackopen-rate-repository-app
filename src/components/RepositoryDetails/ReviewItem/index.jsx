import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import theme from '../../../theme';

import AverageRating from './AverageRating';
import ReviewDetails from './ReviewDetails';

const ReviewItem = ({ item }) => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: windowWidth,
      backgroundColor: theme.colors.cardBg,
      marginTop: theme.dimensions.separatorHeight * 2,
    },


  });
  return (
    <View style={styles.container}>
      <AverageRating style={styles.rating} rating={item.rating} />
      <ReviewDetails style={styles.details} item={item} />
    </View>);
};

export default ReviewItem;