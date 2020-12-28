import React from 'react';
import Text from './Text/Text';

const RepositoryItem = ({ item }) => {
  const propertiesMap = {
    fullName: 'Full name',
    description: 'Description',
    language: 'Language',
    stargazersCount: 'Stars',
    forksCount: 'Forks',
    reviewCount: 'Reviews',
    ratingAverage: 'Rating'
  };
  const details = Object.keys(propertiesMap).map(
    key => <Text key={key}>{propertiesMap[key]}: {item[key]}</Text>
  );
  return details;
};

export default RepositoryItem;