import React from 'react';
import Text from './Text';

const SubHeading = (props) => (
  <Text fontSize='subheading' color='primary'>
    {props.children}
  </Text>
);

export default SubHeading;