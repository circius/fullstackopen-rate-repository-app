import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import ItemSeparator from '../RepositoryList/ItemSeparator';
import ReviewItem from '../RepositoryDetails/ReviewItem';


const MyReviews = () => {
  const user = useAuthorizedUser({ includeReviews: true });

  if (!user) { return <Text>loading...</Text>; }

  const { edges } = user.reviews;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];

  console.log('nodes:', nodes);


  return (
    <FlatList
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View>
          <ReviewItem item={item} authorized={true} />
        </View>)}
    />
  );
};

export default MyReviews;