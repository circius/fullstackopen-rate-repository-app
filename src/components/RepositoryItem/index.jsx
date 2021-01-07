import React from 'react';
import { View, StyleSheet } from 'react-native';

import GithubButton from './GithubButton';
import Stats from './Stats';
import Header from './Header';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.cardBg,
  }
});

const RepositoryItem = (props) => {
  const { item } = props;

  return (
    <View style={styles.container} testID="RepositoryItem">
      <Header item={item} />
      <Stats item={item} />
      {item.url && <GithubButton url={item.url} />}
    </View>
  );
};

export default RepositoryItem;