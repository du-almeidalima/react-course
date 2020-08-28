import React from 'react';
import './Person.css'
import Radium from "radium";

const person = (props) => {

  const personStyle = {
    '@media (max-width: 728px)': {
      width: '100%',
      margin: '10px 0'
    }
  }

  return (
      <div className="Person" style={personStyle}>
        <span className="Person-Close" onClick={props.closeClickHandler}>&times;</span>
        <h3>Hey! I'm {props.name} and I have {props.age} years old!</h3>
        <p>{props.children}</p>
        <input type="text" onChange={e => props.inputHandler(e)} value={props.name}/>
      </div>
  )
};

export default Radium(person);

/*
 * When using more complex CSS things such as, media queries and animations, we need to use another radium wrapper,
 * go to App
 */
