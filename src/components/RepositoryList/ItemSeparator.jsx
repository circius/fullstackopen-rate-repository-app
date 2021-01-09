import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: theme.dimensions.separatorHeight,
    backgroundColor: theme.colors.mainBg,
  },
});

export default ItemSeparator;