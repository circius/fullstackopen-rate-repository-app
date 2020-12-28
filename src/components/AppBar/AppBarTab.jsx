import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarTab,
    padding: 10,
  }
});

const AppBarTab = ({ label, target }) => (
  <Link to={target}>
    <Text style={styles.tab} >{label}</Text>
  </Link>
);

export default AppBarTab;