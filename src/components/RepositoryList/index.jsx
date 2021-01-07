import React from 'react';
import { Text } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    repositories
      ? <RepositoryListContainer repositories={repositories} />
      : <Text>loading...</Text>
  );
};




export default RepositoryList;