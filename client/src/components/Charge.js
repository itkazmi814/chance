import React from 'react';
import PropTypes from 'prop-types';

const Charge = props => (
  <tr>
    <td>{props.count}</td>
    <td>{props.name}</td>
    <td>{props.amount}</td>
    <td>{props.type}</td>
    <td>{props.description}</td>
  </tr>
);

Charge.propTypes = {
  count: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Charge;
