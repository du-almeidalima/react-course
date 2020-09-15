import React from 'react';
import PropTypes from 'prop-types';
import BuildControlsStyle from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControl = props => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ]
  return (
    <div className={BuildControlsStyle.BuildControlsWrapper}>
      { controls.map(c => <BuildControl key={c.type} label={c.label} />) }
    </div>
  )
}

buildControl.propType = {
  label: PropTypes.string.isRequired
}

export default buildControl;