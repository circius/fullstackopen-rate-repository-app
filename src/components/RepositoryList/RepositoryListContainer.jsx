import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from './ItemSeparator';

const RepositoryListContainer = ({ repositories }) => {


  const { edges } = repositories;

  const nodes = edges
    ? edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={nodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <RepositoryItem item={item} />}
  // other props
  />;
};


export default RepositoryListContainer;