import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stat from './Stat';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const Stats = ({ item }) => {
  return (
    <View style={styles.container}>
      <Stat label='Stars' value={item.stargazersCount} />
      <Stat label='Forks' value={item.forksCount} />
      <Stat label='Reviews' value={item.reviewCount} />
      <Stat label='Rating' value={item.ratingAverage} />
    </View>
  );
};

export default Stats;