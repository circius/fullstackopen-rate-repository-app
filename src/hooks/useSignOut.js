import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const signOut = async () => {
    console.log('doing signout');
    await authStorage.removeAccessToken();
    console.log('should have got rid of token');
    apolloClient.resetStore();
    console.log('should have reset store');

  };
  return [signOut];
};

export default useSignOut;