import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import ItemSeparator from '../RepositoryList/ItemSeparator';
import ReviewItem from '../RepositoryDetails/ReviewItem';


const MyReviews = () => {
  const { authorizedUser, refetch } = useAuthorizedUser({ includeReviews: true });

  if (!authorizedUser) { return <Text>loading...</Text>; }

  const { edges } = authorizedUser.reviews;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={nodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View>
          <ReviewItem item={item} authorized={true} refetchReviews={refetch} />
        </View>)}
    />
  );
};

export default MyReviews;