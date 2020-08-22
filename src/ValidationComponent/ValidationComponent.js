import React from 'react';

const validationComponent = (props) => {
  const style = {
    fontSize: '10px',
    color: 'red'
  }
  return (
      <span style={style}>
        { (props.word !== '' && props.word.length < 5) ? 'Too short' : props.word.length > 10 ? 'Too long' : '' }
      </span>
  )
}

export default validationComponent;
