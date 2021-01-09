import React from 'react';
import { View } from 'react-native';
import { useField } from 'formik';

import FormikTextInput from '../TextInput/FormikTextInput';
import SubmitButton from '../SubmitButton';

const CreateReviewForm = ({ onSubmit }) => {
  const [repoOwnerField, repoOwnerMeta, repoOwnerHelpers] = useField('repoOwner');
  const [repoNameField, repoNameMeta, repoNameHelpers] = useField('repoName');
  const [ratingField, ratingMeta, ratingHelpers] = useField('rating');
  const [reviewField, reviewMeta, reviewHelpers] = useField('review');

  return (
    <View>
      <FormikTextInput
        name="repoOwner"
        placeholder="Repository owner name"
        value={repoOwnerField.value}
        onChangeText={text => repoOwnerHelpers.setValue(text)}
      />
      <FormikTextInput
        name='repoName'
        placeholder='Repository name'
        value={repoNameField.value}
        onChangeText={text => repoNameHelpers.setValue(text)}
      />
      <FormikTextInput
        name='rating'
        placeholder='Rating between 0 and 100'
        value={ratingField.value}
        onChangeText={text => ratingHelpers.setValue(text)}
      />
      <FormikTextInput
        name='review'
        placeholder='review between 0 and 100'
        value={reviewField.value}
        onChangeText={text => reviewHelpers.setValue(text)}
      />
      <SubmitButton label='create' onPress={() => onSubmit({
        repoOwner: repoOwnerField.value,
        repoName: repoNameField.value,
        rating: ratingField.value,
        review: reviewField.value,
      })} />
    </View>
  );
};

export default CreateReviewForm;