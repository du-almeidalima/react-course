import React from 'react';
import InputStyle from './Input.module.css';

const Input = props => {
  let inputElement;

  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={InputStyle.Input} {...props.elementConfig} value={props.value}/>
      break;

    case ('textarea'):
      inputElement = <textarea className={InputStyle.Input} {...props.elementConfig} value={props.value}/>
      break;

    case ('select'):
      inputElement = (
          <select className={InputStyle.Input} {...props.elementConfig} value={props.value}>
            {props.elementConfig.options.map(op => {
              return <option key={op.value} value={op.value}>{op.displayValue}</option>
            })}
          </select>
      )
      break;

    default:
      inputElement = <input className={InputStyle.Input} {...props.elementConfig} value={props.value}/>
  }

  return (
      <div className={InputStyle.InputWrapper}>
        <label className={InputStyle.Label}>
          {props.label}
        </label>
        { inputElement }
      </div>
  );
};

export default Input;
