import React, { Component } from "react";
import Person from "./Person/Person";

class People extends Component{ 

  static getDerivedStateFromProps(props, state) {
    console.log('[People] >> getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const shouldUpdate = this.props.people !== nextProps.people;
    console.log('[People] >> shouldComponentUpdate', shouldUpdate);
    return shouldUpdate;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People] >> getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[People] >> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[People] >> componentWillUnmount');
  }

  render() {
    return this.props.people.map((person) => {
      console.log('[People] >> render');
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          closeClickHandler={() => {
            this.props.closePersonHandler(person.id);
          }}
          inputHandler={(event) => {
            this.props.inputHandler(event, person.id);
          }}
        >
          {person.hobby ? person.hobby : null}
        </Person>
      );
    });
  }
}

export default People;
