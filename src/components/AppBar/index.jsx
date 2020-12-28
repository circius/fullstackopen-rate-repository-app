import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 80

  },
  tab: {
    color: theme.colors.primary,
    padding: 10,
  }

  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab>repositories</AppBarTab>
  </View>;
};

export default AppBar;