import React from 'react';
import { View, StyleSheet } from 'react-native';

import Stats from './Stats';
import Header from './Header';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.cardBg,
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View styles={styles.container}>
      <Header item={item} />
      <Stats item={item} />
    </View>
  );
};

export default RepositoryItem;