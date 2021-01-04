import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };
  return [signOut];
};

export default useSignOut;