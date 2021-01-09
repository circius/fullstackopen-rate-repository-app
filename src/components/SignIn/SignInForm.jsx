import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useField } from 'formik';


import Text from '../Text';
import SubmitButton from '../SubmitButton';
import FormikTextInput from '../TextInput/FormikTextInput';
import theme from '../../theme';

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

      <SubmitButton label={'sign in'} onPress={{ usr: usrField.value, pw: pwField.value }} testID="submitButton" />

    </View>
  );
};

export default SignInForm;