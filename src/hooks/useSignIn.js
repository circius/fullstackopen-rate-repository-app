import { useMutation } from "@apollo/react-hooks";

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN,
    { options: { IgnoreResults: false } });
  // console.log('result in signIn hook:', result);

  const signIn = (usr, pw) => {
    mutate({ variables: { username: usr, password: pw } });
  };

  return [signIn, result];
};

export default useSignIn;