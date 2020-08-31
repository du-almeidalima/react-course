import React, { Component } from "react";
import appStyle from "./App.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
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
  };

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

    this.setState({ people: peopleCopy });
  };

  render() {
    return (
      <div className={appStyle.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          togglePeopleHandler={this.togglePeopleHandler}
        />
        {this.state.showPeople ? (
          <People
            people={this.state.people}
            closePersonHandler={this.closePersonHandler}
            inputHandler={this.inputHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
