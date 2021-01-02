import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { useMutation } from "@apollo/react-hooks";

import AuthStorageContext from '../contexts/AuthStorageContext';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();
  const [mutate, result] = useMutation(SIGN_IN,
    { options: { IgnoreResults: false } });

  const signIn = async (usr, pw) => {
    const response = await mutate({ variables: { username: usr, password: pw } });
    const token = response.data.authorize.accessToken;
    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();
    history.push('/');
    return token;
  };

  return [signIn, result];
};

export default useSignIn;