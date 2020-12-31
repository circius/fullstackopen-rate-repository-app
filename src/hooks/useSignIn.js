import { useMutation } from "@apollo/react-hooks";

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN,
    { options: { IgnoreResults: false } });
  // console.log('result in signIn hook:', result);

  const signIn = async (usr, pw) => {
    mutate({ variables: { username: usr, password: pw } }).then(
      whatever => console.log('whatever:', whatever)
    );
    console.log('result in hook:', result.data);

  };

  return [signIn, result];
};

export default useSignIn;