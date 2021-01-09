import React from 'react';
import { View } from 'react-native';
import { useField } from 'formik';


import SubmitButton from '../SubmitButton';
import FormikTextInput from '../TextInput/FormikTextInput';

const SignInForm = ({ onSubmit }) => {
  const [usrField, usrMeta, usrHelpers] = useField('usr');
  const [pwField, pwMeta, pwHelpers] = useField('pw');

  return (
    <View>
      <FormikTextInput
        name="usr"
        placeholder="username"
        value={usrField.value}
        onChangeText={text => usrHelpers.setValue(text)}
        testID="usernameField"
      />
      <FormikTextInput
        name="pw"
        placeholder="password"
        value={pwField.value}
        onChangeText={text => pwHelpers.setValue(text)}
        secureTextEntry={true}
        testID="passwordField"
      />

      <SubmitButton label={'sign in'} onPress={() => onSubmit({ usr: usrField.value, pw: pwField.value })} testID="submitButton" />

    </View>
  );
};

export default SignInForm;