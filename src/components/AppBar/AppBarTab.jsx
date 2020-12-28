import React from 'react';
import { StyleSheet } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarTab,
    padding: 10,
  }
});

const AppBarTab = () => (
  <Text style={styles.tab}>repositories</Text>
);

export default AppBarTab;