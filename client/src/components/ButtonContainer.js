import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ButtonContainer = ({ onClick }) => (
  <div>
    <h3> Welcome to Chance </h3>
    <Button onClick={onClick}>Retrieve Charges from DB</Button>
  </div>
);

ButtonContainer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonContainer;
