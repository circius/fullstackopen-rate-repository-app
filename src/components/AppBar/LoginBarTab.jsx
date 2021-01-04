import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../../graphql/queries';
import AppBarTab from './AppBarTab';

const LoginBarTab = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { loading, error, data } = useQuery(AUTHORIZED_USER, { fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (!loading) {
      setLoggedIn(data.authorizedUser !== null);
    }
  }, [loading]);

  const signIn = {
    label: 'sign in',
    target: '/signin'
  };
  const signOut = {
    label: 'sign out',
    target: '/signout'
  };

  return (
    !loggedIn
      ? <AppBarTab {...signIn} />
      : <AppBarTab {...signOut} />
  );
};

export default LoginBarTab;