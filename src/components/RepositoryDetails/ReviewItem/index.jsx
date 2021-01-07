import React from 'react';
import { View } from 'react-native';

import AverageRating from './AverageRating';
import ReviewDetails from './ReviewDetails';

const ReviewItem = ({ item }) => {
  return (
    <View>
      <AverageRating rating={item.rating} />
      <ReviewDetails item={item} />
    </View>);
};

export default ReviewItem;