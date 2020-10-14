import React from 'react';
import InputStyle from './Input.module.css';

const Input = props => {
  const controlClasses = [InputStyle.Input];

  if (!props.valid && props.shouldValidate && props.touched) {
    controlClasses.push(InputStyle.Invalid);
  }

  let control;

  switch (props.elementType) {
    case ('input'):
      control = (
          <input className={controlClasses.join(' ')}
                 value={props.value}
                 onChange={props.changed}
                 {...props.elementConfig}
          />
      )
      break;

    case ('textarea'):
      control = (
          <textarea className={controlClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                    {...props.elementConfig}
          />
      )
      break;

    case ('select'):
      control = (
          <select className={controlClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(op => {
              return <option key={op.value} value={op.value}>{op.displayValue}</option>
            })}
          </select>
      )
      break;

    default:
      control = (
          <input className={controlClasses.join(' ')}
                 value={props.value}
                 onChange={props.changed}
                 {...props.elementConfig}
          />
      )
  }

  return (
      <div className={InputStyle.InputWrapper}>
        <label className={InputStyle.Label}>
          {props.label}
        </label>
        {control}
      </div>
  );
};

export default Input;
