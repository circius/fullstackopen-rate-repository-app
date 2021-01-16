import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import theme from '../theme';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBg
  },
});

const Main = () => {

  const linkPairs = [
    ['repositories', '/']
  ];
  return (
    <View style={styles.container}>
      <AppBar linkPairs={linkPairs} />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/create" exact>
          <CreateReview />
        </Route>
        <Route path="/myreviews" exact>
          <MyReviews />
        </Route>
        <Route path="/:id">
          <RepositoryDetails />
        </Route>

        <Redirect to="/" />
      </Switch>

    </View>
  );
};

export default Main;