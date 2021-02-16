import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/';

const AddedFeature = props => {
  console.log("props in AddedFeature", props)

  const handleClick = e => {
    // e.preventDefault();
    props.removeFeature(props.feature.id);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
