import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();
  console.log('variables:', variables);


  const { loading, fetchMore, data, refetch } = useQuery(
    ALL_REPOSITORIES, {
    fetchPolicy: 'network-only',
    variables: variables
  });

  const handleFetchMore = () => {
    console.log('entering handleFetchMore');

    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.log('cant fetch more');
      console.log('loading:', loading);
      console.log('data.repositories.pageInfo.hasNextPage:', data.repositories.pageInfo.hasNextPage);



      return;
    }
    console.log('fetching more');

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