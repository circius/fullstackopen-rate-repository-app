import React from 'react';
import { FlatList } from 'react-native';
import ItemSeparator from './ItemSeparator';
import RepositoryListItem from './RepositoryListItem';

const RepositoryListContainer = ({ repositories }) => {


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
  // other props
  />;
};


export default RepositoryListContainer;