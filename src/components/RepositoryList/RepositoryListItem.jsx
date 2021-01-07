import React from 'react';
import { Link } from 'react-router-native';

import RepositoryItem from '../RepositoryItem';

const RepositoryListItem = ({ item }) => {
  return (
    <Link to={item.id}>
      <RepositoryItem item={item} />
    </Link>
  );
};

export default RepositoryListItem;