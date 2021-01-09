import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';

import AverageRating from './AverageRating';
import ReviewDetails from './ReviewDetails';

const ReviewItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.cardBg,
      marginTop: theme.dimensions.separatorHeight * 2
    },
    components: {
      margin: 30
    }
  });
  return (
    <View style={styles.container}>
      <AverageRating style={styles.components} rating={item.rating} />
      <ReviewDetails style={styles.components} item={item} />
    </View>);
};

export default ReviewItem;