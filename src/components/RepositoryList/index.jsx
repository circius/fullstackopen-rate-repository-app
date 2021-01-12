import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';
import RepositorySortingSelector from '../RepositorySortingSelector';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");

  const queryVariables = () => {
    switch (order) {
      case "latest":
        return {
          orderBy: "CREATED_AT"
        };
      case "descending":
        return {
          orderBy: "RATING_AVERAGE"
        };
      case "ascending":
        return {
          orderDirection: "ASC"
        };
      default:
        return {};
    }
  };

  const { repositories, refetch } = useRepositories(queryVariables());

  useEffect(() => {
    refetch(queryVariables);
  }, [order]);

  return (
    <View>
      <RepositorySortingSelector order={order} setOrder={setOrder} />
      {repositories
        ? <RepositoryListContainer repositories={repositories} />
        : <Text>loading...</Text>}
    </View>
  );
};




export default RepositoryList;