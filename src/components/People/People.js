import React, { PureComponent } from "react";
import Person from "./Person/Person";

class People extends PureComponent{ 

  static getDerivedStateFromProps(props, state) {
    console.log('[People] >> getDerivedStateFromProps');
    return state;
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   const shouldUpdate = this.props.people !== nextProps.people;
  //   console.log('[People] >> shouldComponentUpdate', shouldUpdate);
  //   return shouldUpdate;
  // }

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

/**
 * If we want to create a class based component that implements the 'shouldComponentUpdate' checking all of its
 * props for change, we could extend the PureComponent class. This class is the same as Component but it already implement such kind
 * of checking.
 */