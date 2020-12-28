import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useField, Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './TextInput/FormikTextInput';
import theme from '../theme';

const initialValues = {
  usr: '',
  pw: '',
};

const styles = StyleSheet.create({

  submit: {
    height: theme.spacings.formLineHeight,
    margin: theme.spacings.formMargin,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.rounding.borderRadius,
    backgroundColor: theme.colors.primary,
  },
  submitText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

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
      <TouchableOpacity onPress={onSubmit({ usr: usrField.value, pw: pwField.value })} >
        <View style={styles.submit}>
          <Text style={styles.submitText}>Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => console.log(values);

  return (
    <Formik initialValues={initialValues}>
      <SignInForm onSubmit={onSubmit} />
    </Formik>
  );
};

export default SignIn;