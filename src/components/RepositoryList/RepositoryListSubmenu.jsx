import React from 'react';
import { View, StyleSheet } from 'react-native';

import RepositorySortingSelector from './RepositorySortingSelector';
import RepositorySearchBar from './RepositorySearchBar';


const RepositoryListSubmenu = ({ order, setOrder, filterStr, setFilterStr }) => {
  return (
    <View style={styles.subMenuContainer}>
      <RepositorySearchBar
        filterStr={filterStr}
        setFilterStr={setFilterStr}
      />
      <RepositorySortingSelector
        order={order}
        setOrder={setOrder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subMenuContainer: {
    display: 'flex',
  },
});

export default RepositoryListSubmenu;