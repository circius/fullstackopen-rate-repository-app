import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';
import RepositoryListSubMenu from './RepositoryListSubmenu';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");
  const [filterStr, setFilterStr] = useState("zeit");

  const sortQueryVariables = () => {
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

  const getQueryVariables = () => {
    const sortVars = sortQueryVariables();
    return filterStr ? { ...sortVars, searchKeyword: filterStr } : sortVars;
  };

  const { repositories, refetch } = useRepositories(getQueryVariables());

  useEffect(() => {
    refetch(getQueryVariables());
  }, [order, filterStr]);

  return (
    <View>
      <RepositoryListSubMenu setOrder={setOrder} order={order} />
      {repositories
        ? <RepositoryListContainer repositories={repositories} />
        : <Text>loading...</Text>}
    </View>
  );
};

export default RepositoryList;