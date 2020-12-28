import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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

const AppBar = ({ linkPairs }) => {

  return <View style={styles.container}>
    <ScrollView horizontal>
      {linkPairs.map(
        pair => <AppBarTab key={pair[1]} label={pair[0]} target={pair[1]} />
      )}
    </ScrollView>
  </View>;
};

export default AppBar;