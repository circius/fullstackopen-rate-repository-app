import React from 'react';
import * as Linking from 'expo-linking';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import theme from '../../theme';

const GithubButton = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.rounding.borderRadius,
      padding: 10,
      margin: 10,
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: 'bold'
    }
  });
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>Open in Github</Text>
    </TouchableOpacity>
  );
};

export default GithubButton;