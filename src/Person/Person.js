import React from 'react';
import './Person.css'

const person = (props) => {

  return (
      <div className="person-container" onClick={props.clickHandler}>
        <h3>Hey! I'm {props.name} and I have {props.age} years old!</h3>
        <p>{props.children}</p>
      </div>
  )
};

export default person;

/*
 * Children can be understood as the <ng-content>, it's a reserved keyword. Useful to pass complex HTML or other Components
 */
