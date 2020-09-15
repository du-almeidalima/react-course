import React from 'react';
import PropTypes from 'prop-types';
import BuildControlStyle from './BuildControl.module.css';

const buildControl = props => {
  
  return (
    <div className={BuildControlStyle.BuildControlWrapper}>
      <span>{props.label}</span>
      <div className={BuildControlStyle.BuildControlButtonsWrapper}>
        <button className={`${BuildControlStyle.BuildControlBtn} ${BuildControlStyle.More}`}>+</button>
        <button className={`${BuildControlStyle.BuildControlBtn} ${BuildControlStyle.Less}`}>-</button>
      </div>
    </div>
  )
}

buildControl.propType = {
  label: PropTypes.string.isRequired
}

export default buildControl;