import React from 'react';

import AppBarTab from './AppBarTab';

const LoginBarTab = () => {
  const loggedIn = false;
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