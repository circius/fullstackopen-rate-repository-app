import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '../Text';
import Badge from './Badge';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'column',
    margin: 5,
  },
  detailsItem: {
    margin: 5,
  },
  tinyAvatar: {
    width: 50,
    height: 50,
    margin: 5,
  },

});

const Header = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.ownerAvatarUrl }}
        style={styles.tinyAvatar}
      />
      <View style={styles.detailsContainer}>
        <Text fontWeight='bold' style={styles.detailsItem}>{item.fullName}</Text>
        <Text style={styles.detailsItem}>{item.description}</Text>
        <Badge label={item.language} style={styles.detailsItem} />
      </View>
    </View>
  );
};

export default Header;