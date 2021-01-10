import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignUpForm from './SignUpForm';

const SignUp = () => {
  const onSubmit = (vals) => console.log(vals);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <SignUpForm onSubmit={onSubmit} />
    </Formik>

  );
};

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[\w\d-]+$/, 'invalid username: only chars, nums and `-`')
    .min(1, 'must be at least 1 character')
    .max(30, "can't be longer than 30 characters")
    .required('how can you do without a name?'),
  password: yup
    .string()
    .min(5, 'must be at least 5 characters')
    .max(50, 'more than 50 characters is a bit much, make do with less')
    .required('of course you need a password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "passwords don't match")
    .required('please confirm your password')
});

export default SignUp;