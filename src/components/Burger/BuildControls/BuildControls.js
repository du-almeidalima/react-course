import React from 'react';
import BuildControlsStyle from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ]
  return (
    <div className={BuildControlsStyle.BuildControlsWrapper}>
      { controls.map(c => (
        <BuildControl
          key={c.type}
          label={c.label}
          added={() => { props.ingredientAdded(c.type) }}
          removed={() => { props.ingredientRemoved(c.type) }}
          disabled={props.disabledInfo[c.type]}
        />
      )) }
    </div>
  )
}

export default buildControls;