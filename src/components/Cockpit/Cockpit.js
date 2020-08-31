import React from "react";
import cockpitStyle from './Cockpit.css';

const cockpit = (props) => {
  return (
    <React.Fragment>
      <h1>Hello React World</h1>
      <button
        className={`${cockpitStyle.Btn} ${
          props.showPeople ? cockpitStyle.Pressed : cockpitStyle.Normal
        }`}
        onClick={props.togglePeopleHandler}
      >
        Toggle People
      </button>
    </React.Fragment>
  );
};

export default cockpit;
