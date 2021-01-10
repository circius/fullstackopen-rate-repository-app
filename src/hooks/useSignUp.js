import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";

import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  const history = useHistory();

  const signUp = async ({ password, username }) => {
    const response = await mutate({
      variables: {
        password, username
      }
    });
    console.log('response:', response);
    history.push('/');
  };
  return [signUp, result];
};

export default useSignUp;