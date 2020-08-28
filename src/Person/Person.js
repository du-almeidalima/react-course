import React from 'react';
import styled from 'styled-components';
import './Person.css';

const person = (props) => {

  // This is a Styled Component Component
  const PersonWrapper = styled.div`
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      padding: 10px 15px;
      border: 1px solid gray;
      box-shadow: 5px 5px 5px lightgray;
      margin: 10px;
      
      @media (max-width: 728px) {
        width: 100%;
        margin: 10px 0;
      }  
  `

  return (
      <PersonWrapper>
        <span className="Person-Close" onClick={props.closeClickHandler}>&times;</span>
        <h3>Hey! I'm {props.name} and I have {props.age} years old!</h3>
        <p>{props.children}</p>
        <input type="text" onChange={e => props.inputHandler(e)} value={props.name}/>
      </PersonWrapper>
  )
};

export default person;

/*
 * With Styled Components we can create our own React Components with Styles on it and use it like a normal HTML element
 */
