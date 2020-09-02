import React, { Component } from "react";
import appStyle from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";

class App extends Component {
  // Injected by React
  constructor(props) {
    super(props);

    console.log('[App] >> constructor');
  }

  state = {
    people: [
      { id: 1, name: "Eduardo", age: 23 },
      {
        id: 2,
        name: "Jolie",
        age: 25,
        hobby: "I really like watching Netflix",
      },
      { id: 3, name: "Juaum", age: 18 },
    ],
    showPeople: false,
    showCockpit: true,
    counter: 0
  };

  // Lifecycle Hooks
  static getDerivedStateFromProps(props, state) {
    console.log('[App] >> getDerivedStateFromProps', props, state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App] >> shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App] >> componentDidUpdate', prevProps, prevProps);
  }

  componentDidMount() {
    console.log('[App] >> componentDidMount');
  }

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  closePersonHandler = (id) => {
    const filteredPeople = this.state.people.filter(
      (person) => person.id !== id
    );
    this.setState({ people: filteredPeople });
  };

  inputHandler = (e, id) => {
    const pIndex = this.state.people.findIndex((p) => p.id === id);
    const personCopy = { ...this.state.people[pIndex], name: e.target.value };
    const peopleCopy = [...this.state.people];

    peopleCopy[pIndex] = personCopy;

    /* Ensuring the 'state' value */
    this.setState((prevState, props) => {
      return {
        people: peopleCopy,
        counter: prevState.counter + 1
      }
    });
  };

  render() {
    console.log('[App] >> render');
    return (
      <React.Fragment>
        <button onClick={() => { this.setState({ showCockpit: false })}}>Remove Cockpit</button>

        { this.state.showCockpit ? <Cockpit showPeople={this.state.showPeople} togglePeopleHandler={this.togglePeopleHandler} /> : null }

        {this.state.showPeople ? (
          <People
            people={this.state.people}
            closePersonHandler={this.closePersonHandler}
            inputHandler={this.inputHandler}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default withClass(App, appStyle.App);

/**
 * When you need to update the state with the previous value of the state with 'setState' you need to pass a function
 * to the 'setState' function that will receive 'previousState' and 'props'. This is needed because setState is not
 * actually a sync op. React will try to determine the best time to re-render the component, and when this occurs,
 * even though setState was called a while, if you use a object as the setState parameter, it will take the current
 * state object, and this may be incorrect.
 */
