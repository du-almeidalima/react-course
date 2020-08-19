import React from 'react';

const person = (props) => {

  return (
      <React.Fragment>
        <h1>Hey! I'm { props.name } and I have { props.age } years old!</h1>
        <h3>{ props.children }</h3>
      </React.Fragment>
  )
};

export default person;

/*
 * Children can be understood as the <ng-content>, it's a reserved keyword. Useful to pass complex HTML or other Components
 */
