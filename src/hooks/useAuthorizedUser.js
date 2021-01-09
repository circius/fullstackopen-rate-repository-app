import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const [authorizedUser, setAuthorizedUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(AUTHORIZED_USER, { fetchPolicy: "cache-and-network" });

  useEffect(() => {
    if (!loading) {
      setAuthorizedUser(data.authorizedUser !== null);
    }
  }, [data]);

  return authorizedUser;
};


export default useAuthorizedUser;