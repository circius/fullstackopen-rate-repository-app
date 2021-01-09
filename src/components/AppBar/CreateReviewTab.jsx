import React from 'react';
import AppBarTab from './AppBarTab';

const CreateReviewTab = () => {
  const props = {
    label: 'create review',
    target: '/create'
  };
  return (
    <AppBarTab props={props} />
  );
};

export default CreateReviewTab;