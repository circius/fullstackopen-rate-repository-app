import React from 'react';
import AppBarTab from './AppBarTab';

const SignUpTab = () => {
  const props = {
    label: 'sign up',
    target: '/signup'
  };


  return (
    <AppBarTab {...props} />
  );
};

export default SignUpTab;