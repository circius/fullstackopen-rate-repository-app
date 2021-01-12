import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data, refetch } = useQuery(
    ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch };
};

export default useRepositories;