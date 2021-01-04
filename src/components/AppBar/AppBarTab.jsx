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

const AppBarTab = (props) => {
  console.log('props in AppBarTab:', props);

  return (
    <Link to={props.target}>
      <Text
        style={styles.tab}
        {...props} // for compatibility with Touchable providers
      >
        {props.label}
      </Text>
    </Link>
  );
};

export default AppBarTab;