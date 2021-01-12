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
    return filterStrDebounce ? { ...sortVars, searchKeyword: filterStrDebounce } : sortVars;
  };

  const { repositories, refetch } = useRepositories(getQueryVariables());

  useEffect(() => {
    refetch(getQueryVariables());
  }, [order, filterStrDebounce]);

  return (
    <View>
      <RepositoryListSubMenu setOrder={setOrder} order={order} filterStr={filterStr} setFilterStr={setFilterStr} />
      {repositories
        ? <RepositoryListContainer repositories={repositories} />
        : <Text>loading...</Text>}
    </View>
  );
};

export default RepositoryList;