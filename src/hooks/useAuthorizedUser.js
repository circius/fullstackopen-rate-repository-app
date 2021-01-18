import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, data, refetch } = useQuery(AUTHORIZED_USER, { fetchPolicy: "cache-and-network", variables });

  useEffect(() => {
    if (!loading) {
      setAuthorizedUser(data.authorizedUser);
    }
  }, [data]);

  return { authorizedUser, refetch };
};


export default useAuthorizedUser;