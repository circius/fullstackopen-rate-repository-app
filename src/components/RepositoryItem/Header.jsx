import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  tinyAvatar: {
    width: 50,
    height: 50,
  }
});

const Header = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.ownerAvatarUrl }}
        style={styles.tinyAvatar}
      />
      <View style={styles.detailsContainer}>
        <Text fontWeight='bold'>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <Text>{item.language}</Text>
      </View>
    </View>
  );
};

export default Header;