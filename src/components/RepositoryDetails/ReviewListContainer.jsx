import React from 'react';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';


import ItemSeparator from '../RepositoryList/ItemSeparator';

const ReviewListContainer = ({ reviews, onEndReach }) => {

  const { edges } = reviews;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];

  console.log('nodes of reviewlist:', nodes);


  return <FlatList
    data={nodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <ReviewItem item={item} />}
    onEndReached={onEndReach}
    onEndReachedThreshold={.5}
  />;
};

export default ReviewListContainer;