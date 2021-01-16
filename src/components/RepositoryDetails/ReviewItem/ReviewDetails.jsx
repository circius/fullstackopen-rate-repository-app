import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

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

  const fdate = format(Date.parse(item.createdAt), "dd.MM.yy");

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{item.user ? item.user.username : item.repository.fullName}</Text>
      <Text style={styles.createdAt}>{fdate}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default ReviewDetails;