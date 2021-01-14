import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { loading, fetchMore, data, refetch } = useQuery(
    ALL_REPOSITORIES, {
    fetchPolicy: 'network-only',
    variables: variables
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: ALL_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges
            ]
          }
        };
        return nextResult;
      }

    });

  };

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepositories;