import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { REPOSITORY_DETAILS } from '../graphql/queries';

const useRepositories = (id) => {
  const [repository, setRepository] = useState();

  const { loading, error, data, refetch } = useQuery(
    REPOSITORY_DETAILS,
    {
      fetchPolicy: 'cache-and-network',
      variables: { id: id }
    });

  useEffect(() => {
    if (!loading) {
      setRepository(data.repository);
    }
  }, [loading]);

  return { repository, loading, refetch };
};

export default useRepositories;