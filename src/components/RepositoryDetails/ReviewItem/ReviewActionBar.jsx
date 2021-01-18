import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import Button from '../../Button';
import theme from '../../../theme';
import { DELETE_REVIEW } from '../../../graphql/mutations';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBg,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

const ReviewActionBar = ({ repoId, reviewId, refetchReviews }) => {
  const history = useHistory();
  const [mutate] = useMutation(DELETE_REVIEW);
  const gotoRepo = () => {
    history.push(`/${repoId}`);
  };

  const deleteConfirm = async () => {
    Alert.alert(
      "Delete review?",
      "Do you want to delete the review?",
      [
        {
          text: "Cancel",
          style: "cancel",

        },
        {
          text: "Delete",
          onPress: () => deleteReview(),
          style: "destructive"
        }

      ]
    );
  };

  const deleteReview = async () => {
    const result = await mutate({ variables: { id: reviewId } });
    refetchReviews();
  };

  return (
    <View style={styles.container}>
      <Button color={theme.colors.primary} label="view repo" onPress={() => gotoRepo()} />
      <Button color={theme.colors.reject} label="delete review" onPress={() => deleteConfirm()} />
    </View>
  );
};

export default ReviewActionBar;