import React from 'react';
import InputStyle from './Input.module.css';

const Input = props => {
  let inputElement;

  switch (props.inputtype) {
    case ('input'):
      inputElement = <input {...props} className={InputStyle.Input} />
      break;

    case ('textarea'):
      inputElement = <textarea {...props} className={InputStyle.Input} />
      break;

    default:
      inputElement = <input {...props} className={InputStyle.Input} />
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
