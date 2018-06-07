import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonContainer = props => (
  <div>
    <h3> Welcome to Chance </h3>
    <Button onClick={props.onClick}>Retrieve Charges from DB</Button>
  </div>
)

export default ButtonContainer;
