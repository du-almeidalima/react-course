import React, { useEffect } from "react";
import cockpitStyle from './Cockpit.css';

const cockpit = (props) => {
  // Triggers on every change
  useEffect(() => {
    console.log('[Cockpit] >> useEffect');
  });

  // Triggers when props.showPeople change
  useEffect(() => {
    console.log('[Cockpit] >> useEffect on showPeople');
  }, [props.showPeople])

  // Triggers only once, equivalent to componentDidMount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      alert('[Cockpit] >> useEffect as componentDidMount');
    }, 4000);

    // Returning a function will act as the componentDidUnmount
    return () => { 
      clearTimeout(timeoutId);
      console.log('[Cockpit] >> useEffect as componentDidUnmount');
    }
  }, []);

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

export default React.memo(cockpit);

/**
 * useEffect is kind of a all in one lifecycle hook, it executes on component creation, update and so on...
 * But we can tweak it, of example we can set this function to only execute when a certain value/object change.
 * 
 * And we can set it / call it more than once
 * 
 * React.memo is useful for optimizing the code, when wrapping the component on this function, React will keep track of the
 * input/props changes and decide if there's need to re-render this component.
 */