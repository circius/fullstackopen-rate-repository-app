import React from 'react';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

const SignUp = () => {
  const onSubmit = (vals) => console.log(vals);

  return (
    <Formik
      initialValues={initialValues}
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

export default SignUp;