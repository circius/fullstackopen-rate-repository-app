import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';
import AppBarTab from './AppBarTab';
import { TouchableWithoutFeedback } from 'react-native';

const LoginBarTab = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { loading, error, data } = useQuery(AUTHORIZED_USER, { fetchPolicy: 'cache-and-network' });
  const [doSignOut] = useSignOut();

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
    target: '#'
  };

  return (
    !loggedIn
      ? <AppBarTab {...signIn} />
      : <TouchableWithoutFeedback onPress={() => doSignOut()}>
        <AppBarTab {...signOut} />
      </TouchableWithoutFeedback>
  );
};

export default LoginBarTab;