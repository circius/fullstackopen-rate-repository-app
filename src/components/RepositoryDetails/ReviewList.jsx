import React from 'react';
import { Text, FlatList } from 'react-native';

import useReviews from '../../hooks/useReviews';
import ItemSeparator from '../RepositoryList/ItemSeparator';
import ReviewItem from './ReviewItem';

const ReviewList = ({ id }) => {
  const { reviews } = useReviews(id);

  if (!reviews) return <Text>loading...</Text>;

  const { edges } = reviews;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem item={item} />}
    />
  );
};

export default ReviewList;