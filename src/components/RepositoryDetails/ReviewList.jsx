import React from 'react';
import { Text } from 'react-native';

import useReviews from '../../hooks/useReviews';
const ReviewList = ({ id }) => {
  const { reviews } = useReviews(id);
  console.log('reviews:', reviews);

  return <Text>{id}</Text>;
};

export default ReviewList;