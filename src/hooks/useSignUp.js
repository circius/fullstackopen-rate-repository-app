import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";

import { SIGN_UP } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const history = useHistory();
  const [signIn] = useSignIn();

  const signUp = async ({ password, username }) => {
    await mutate({
      variables: {
        password, username
      }
    });
    await signIn(username, password);
    history.push('/');
  };
  return [signUp, result];
};

export default useSignUp;