import React from 'react';

const charComponent = (props) => {
  return (
    <span className="Char-Component" onClick={props.removeClick}>
      { props.character }
    </span>
  )
}

export default charComponent;
