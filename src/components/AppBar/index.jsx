import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import AppBarTab from './AppBarTab';
import LoginBarTab from './LoginBarTab';
import CreateReviewTab from './CreateReviewTab';
import MyReviewsTab from './MyReviewsTab';
import SignUpTab from './SignUpTab';

import theme from '../../theme';


const AppBar = ({ linkPairs }) => {
  const { authorizedUser } = useAuthorizedUser();

  return <View style={styles.container}>
    <ScrollView horizontal>
      {linkPairs.map(
        pair => <AppBarTab key={pair[1]} label={pair[0]} target={pair[1]} />
      )}
      {!authorizedUser && <SignUpTab />}
      {authorizedUser && <CreateReviewTab />}
      {authorizedUser && <MyReviewsTab />}
      <LoginBarTab authorizedUser={authorizedUser} />
    </ScrollView>
  </View>;
};

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
});
export default AppBar;