import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useField } from 'formik';


import Text from '../Text';
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
      <TouchableOpacity
        onPress={() => onSubmit({ usr: usrField.value, pw: pwField.value })}
        testID="submitButton"
      >
        <View style={styles.submit}>
          <Text style={styles.submitText}>Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
    color: theme.colors.buttonText,
    fontWeight: theme.fontWeights.bold
  }
});

export default SignInForm;