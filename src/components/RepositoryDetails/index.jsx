import React from 'react';
import { Text, View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryItem';
import ReviewList from './';

const RepositoryDetails = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return <Text>loading...</Text>;

  return (
    <View>
      <RepositoryItem item={repository} />
      <ReviewList id={repository.id} />
    </View>
  );
};

export default RepositoryDetails;