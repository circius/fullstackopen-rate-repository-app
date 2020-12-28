import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useField, Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './TextInput/FormikTextInput';

const initialValues = {
  usr: '',
  pw: '',
};

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
      />
      <FormikTextInput
        name="pw"
        placeholder="password"
        value={pwField.value}
        onChangeText={text => pwHelpers.setValue(text)}
        secureTextEntry={true}
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => console.log(values);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <SignInForm />
    </Formik>
  );
};

export default SignIn;