import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { loading, _error, data } = useQuery(ALL_REPOSITORIES);

  const queryRepositories = async () => {
    const { repositories } = await data;
    setRepositories(repositories);
  };

  useEffect(() => {
    queryRepositories();
  }, []);

  return { repositories, loading, refetch: queryRepositories };
};

export default useRepositories;