import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/';

const AdditionalFeature = props => {
  // console.log("props", props)
  const handleClick = e => {
    // e.preventDefault();
    // console.log("calling props.addFeature with", props.feature.id)
    props.addFeature(props.feature.id);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
