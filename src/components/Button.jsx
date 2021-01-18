import React from 'react';
import { Button } from 'react-native-paper';

const projectButton = (props) => {
  return (
    <Button
      style={!props.style ? { marginLeft: 10, marginRight: 10 } : props.style}
      mode={!props.mode ? "contained" : props.mode}
      {...props}
    >
      {props.label}
    </Button>
  );
};




export default projectButton;