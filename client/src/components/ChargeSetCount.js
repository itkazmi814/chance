import React from 'react';
import PropTypes from 'prop-types';

const ChargeSetCount = ({ numSets }) => (
  <h3> Currently displaying {numSets} sets of charges </h3>
);

ChargeSetCount.propTypes = {
  numSets: PropTypes.number.isRequired
};

export default ChargeSetCount;
