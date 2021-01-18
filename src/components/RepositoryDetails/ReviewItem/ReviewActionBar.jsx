import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';

import Button from '../../Button';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBg,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

const ReviewActionBar = ({ repoId }) => {
  const history = useHistory();
  const gotoRepo = () => {
    history.push(`/${repoId}`);
  };
  return (
    <View style={styles.container}>
      <Button color={theme.colors.primary} label="view repo" onPress={() => gotoRepo()} />
      <Button color={theme.colors.reject} label="delete review" />
    </View>
  );
};

export default ReviewActionBar;