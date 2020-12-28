import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({ item }) => (
  Object.keys(item).map(
    key => <Text key={key}>{key}: {item[key]}</Text>
  )
);

export default RepositoryItem;