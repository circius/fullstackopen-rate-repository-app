import React from 'react';
import { FlatList, LogBox } from 'react-native';
import ItemSeparator from './ItemSeparator';
import RepositoryListItem from './RepositoryListItem';

const RepositoryListContainer = ({ repositories, onEndReach, ListHeaderComponent }) => {


  const { edges } = repositories;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={nodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => (
      <RepositoryListItem item={item} />
    )}
    onEndReached={onEndReach}
    onEndReachedThreshold={1}
    ListHeaderComponent={ListHeaderComponent}
  // other props
  />;
};


export default RepositoryListContainer;