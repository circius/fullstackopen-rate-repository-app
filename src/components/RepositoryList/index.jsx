import React from 'react';
import { Text, View } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';
import RepositorySortingSelector from '../RepositorySortingSelector';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <View>
      <RepositorySortingSelector />
      {repositories
        ? <RepositoryListContainer repositories={repositories} />
        : <Text>loading...</Text>}
    </View>
  );
};




export default RepositoryList;