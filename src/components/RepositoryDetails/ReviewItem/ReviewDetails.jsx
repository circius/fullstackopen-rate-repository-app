import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ReviewDetails = ({ item }) => {
  const styles = StyleSheet.create({
    container: {},
    username: {
      fontWeight: 'bold'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{item.user.username}</Text>
      <Text>{item.createdAt}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

export default ReviewDetails;