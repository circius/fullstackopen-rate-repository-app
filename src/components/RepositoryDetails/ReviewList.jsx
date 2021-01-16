import React from 'react';
import { Text } from 'react-native';

import useReviews from '../../hooks/useReviews';
import ReviewListContainer from './ReviewListContainer';


const ReviewList = ({ id }) => {
  const INITIAL_FETCH = 4;
  const initialQueryVariables = {
    id,
    first: INITIAL_FETCH,
  };
  const { reviews, fetchMore, refetch } = useReviews(initialQueryVariables);

  const onEndReach = () => {
    fetchMore();
  };

  if (!reviews) return <Text>loading...</Text>;

  return (
    <ReviewListContainer
      reviews={reviews}
      onEndReach={onEndReach} />
  );
};

export default ReviewList;