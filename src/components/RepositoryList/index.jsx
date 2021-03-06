import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import RepositoryListContainer from './RepositoryListContainer';
import RepositoryListSubMenu from './RepositoryListSubmenu';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [order, setOrder] = useState("latest");
  const [filterStr, setFilterStr] = useState("");
  const [filterStrDebounce] = useDebounce(filterStr, 500);

  const getSortQueryVariables = (argsObject) => {
    switch (order) {
      case "latest":
        return {
          orderBy: "CREATED_AT",
          ...argsObject
        };
      case "descending":
        return {
          orderBy: "RATING_AVERAGE",
          ...argsObject
        };
      case "ascending":
        return {
          orderDirection: "ASC",
          ...argsObject
        };
      default:
        return { ...argsObject };
    }
  };

  const getQueryVariables = () => {
    const baseQueryVariables = {
      first: 2
    };
    const sortVars = getSortQueryVariables(baseQueryVariables);
    return filterStrDebounce ? { ...sortVars, searchKeyword: filterStrDebounce } : sortVars;
  };

  const { repositories, refetch, fetchMore } = useRepositories(getQueryVariables());

  const onEndReach = () => {
    fetchMore();
  };

  useEffect(() => {
    refetch(getQueryVariables());
  }, [order, filterStrDebounce]);

  return (
    <View style={{ flex: 1 }}>

      {repositories
        ? <RepositoryListContainer
          repositories={repositories}
          onEndReach={onEndReach}
          ListHeaderComponent={<RepositoryListSubMenu setOrder={setOrder} order={order} filterStr={filterStr} setFilterStr={setFilterStr} />}
        />
        : <Text>loading...</Text>}
    </View>
  );
};

export default RepositoryList;