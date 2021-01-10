import React from 'react';
import { View } from 'react-native';
import { useField } from 'formik';

import FormikTextInput from '../TextInput/FormikTextInput';
import SubmitButton from '../SubmitButton';

const SignUpForm = () => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  const [passwordConfirmField, passwordConfirmMeta, passwordConfirmHelpers] = useField('passwordConfirm');

  return (
    <View>
      <FormikTextInput
        name='username'
        placeholder='username'
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
      />
      <FormikTextInput
        name='password'
        placeholder='password'
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
      />
      <FormikTextInput
        name='passwordConfirm'
        placeholder='confirm password'
        value={passwordConfirmField.value}
        onChangeText={text => passwordConfirmHelpers.setValue(text)}
      />
      <SubmitButton label='sign up' onPress={() => onsubmit({
        username: usernameField.value,
        password: passwordField.value
      })}
      />
    </View>
  );
};

export default SignUpForm;