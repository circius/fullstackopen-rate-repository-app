import React from 'react';
import { Text } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const RepositoryDetails = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  return (
    repository
      ? <RepositoryItem item={repository} />
      : <Text> loading ...</Text>
  );
};

export default RepositoryDetails;