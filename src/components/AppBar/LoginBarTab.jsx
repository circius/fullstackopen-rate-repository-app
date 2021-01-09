import React from 'react';

import useSignOut from '../../hooks/useSignOut';
import AppBarTab from './AppBarTab';
import { TouchableWithoutFeedback } from 'react-native';

const LoginBarTab = ({ authorizedUser }) => {
  const [doSignOut] = useSignOut();


  const signIn = {
    label: 'sign in',
    target: '/signin'
  };
  const signOut = {
    label: 'sign out',
    target: '#'
  };
  return (
    !authorizedUser
      ? <AppBarTab {...signIn} />
      : <TouchableWithoutFeedback onPress={() => doSignOut()}>
        <AppBarTab {...signOut} />
      </TouchableWithoutFeedback>
  );
};

export default LoginBarTab;