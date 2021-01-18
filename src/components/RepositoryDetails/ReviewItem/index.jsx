import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import theme from '../../../theme';

import AverageRating from './AverageRating';
import ReviewDetails from './ReviewDetails';
import ReviewActionBar from './ReviewActionBar';

const ReviewItem = ({ item, authorized }) => {
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
    <View>
      <View style={styles.container}>
        <AverageRating rating={item.rating} />
        <ReviewDetails item={item} />
      </View>
      { authorized && <ReviewActionBar repoId={item.repository.id} />}
    </View>);
};

export default ReviewItem;