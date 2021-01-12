import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const RepositorySearchBar = ({ filterStr, setFilterStr }) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Filter"
        onChangeText={textContent => setFilterStr(textContent)}
        value={filterStr}
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