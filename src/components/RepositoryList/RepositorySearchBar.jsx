import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const RepositorySearchBar = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Filter"
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    color: 'fuchsia'
    // flexBasis: 2
  }
});
export default RepositorySearchBar;