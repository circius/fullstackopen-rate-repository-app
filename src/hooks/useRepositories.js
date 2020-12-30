import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { loading, error, data, refetch } = useQuery(ALL_REPOSITORIES, { fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [loading]);

  return { repositories, loading, refetch };
};

export default useRepositories;