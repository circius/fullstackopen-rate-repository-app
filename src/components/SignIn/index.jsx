import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = ({ usr, pw }) => signIn(usr, pw);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <SignInForm onSubmit={onSubmit} />
    </Formik>
  );
};

const initialValues = {
  usr: '',
  pw: '',
};

const validationSchema = yup.object().shape({
  usr: yup
    .string()
    .max(99, 'you can fit it in ${max} characters')
    .required('you must have a username'),
  pw: yup
    .string()
    .min(8, "must be more than ${min} characters")
    .max(100, 'more than ${max} really not necessary')
    .required('you must have a password')
});

export default SignIn;