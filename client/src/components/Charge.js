import React from 'react';

const Charge = props => (
  <tr>
    <td>{props.count}</td>
    <td>{props.name}</td>
    <td>{props.amount}</td>
    <td>{props.type}</td>
    <td>{props.description}</td>
  </tr>
)

export default Charge;
