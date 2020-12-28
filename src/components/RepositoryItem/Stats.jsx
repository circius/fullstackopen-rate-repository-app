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
  const summarize = (maybeNumber) => {
    if (isNaN(maybeNumber) || maybeNumber < 1000) {
      return maybeNumber;
    } else {
      return (maybeNumber / 1000).toFixed(1) + 'K';
    }
  };
  const desiredStats = [
    ['Stars', item.stargazersCount],
    ['Forks', item.forksCount],
    ['Reviews', item.reviewCount],
    ['Rating', item.ratingAverage]
  ];
  const summaryStats = desiredStats.map(
    pair => [pair[0], summarize(pair[1])]
  );
  console.log(summaryStats);
  return (
    <View style={styles.container}>
      {summaryStats.map(
        pair => <Stat key={pair[0]} label={pair[0]} value={pair[1]} />
      )}
    </View>
  );
};

export default Stats;