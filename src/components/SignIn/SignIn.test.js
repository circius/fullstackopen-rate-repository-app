import React from 'react';
import { Formik } from 'formik';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import SignInForm from './SignInForm';


describe('the sign in form', () => {
  it('correctly submits its data', async () => {
    const onSubmit = jest.fn();
    const initialValues = {
      usr: '',
      pw: '',
    };

    const { getByTestId } = render(
      <Formik initialValues={initialValues}>
        <SignInForm onSubmit={onSubmit} />
      </Formik>
    );

    fireEvent.changeText(getByTestId('usernameField'), 'jerome');
    fireEvent.changeText(getByTestId('passwordField'), 'mypassword');
    fireEvent.press(getByTestId('submitButton'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        usr: 'jerome',
        pw: 'mypassword'
      });
    });
  });
});