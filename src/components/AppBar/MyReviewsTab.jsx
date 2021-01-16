import React from 'react';
import AppBarTab from './AppBarTab';

const MyReviewsTab = () => {
  const props = {
    label: 'my reviews',
    target: '/myreviews'
  };


  return (
    <AppBarTab {...props} />
  );
};

export default MyReviewsTab;