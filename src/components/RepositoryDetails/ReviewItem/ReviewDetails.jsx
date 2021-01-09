import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../../../theme';

const ReviewDetails = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      margin: theme.dimensions.reviewMargin,
      display: 'flex',
      flex: 3,
    },
    username: {
      fontWeight: 'bold',
    },
    createdAt: {
      color: theme.colors.textSecondary,
    },
    text: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{item.user.username}</Text>
      <Text style={styles.createdAt}>{item.createdAt}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default ReviewDetails;