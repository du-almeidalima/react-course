import React from 'react';

const UserInput = (props) => {
  const style = {
    boxSizing: 'border-box',
    width: '100%',
    padding: '5px',
    border: '1px solid lightgray',
    borderRadius: '5px'
  }

  return (
      <input type="text" style={style} onInput={props.inputHandler} value={props.value}/>
  )
}

export default UserInput;
