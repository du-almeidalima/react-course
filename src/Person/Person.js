import React from 'react';
import personStyles from './Person.css';

const person = (props) => {
  return (
      <div className={personStyles.Person}>
        <span className={personStyles.Close} onClick={props.closeClickHandler}>&times;</span>
        <h3>Hey! I'm {props.name} and I have {props.age} years old!</h3>
        <p>{props.children}</p>
        <input type="text" onChange={e => props.inputHandler(e)} value={props.name}/>
      </div>
  )
};

export default person;