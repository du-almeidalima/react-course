import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: 'Eduardo', age: 23},
      { name: 'Jolie', age: 25},
      { name: 'Juaum', age: 18}
    ],
    hobby: 'I really like watching Netflix'
  }

  switchNameHandler = () => {
    const people = [
      this.state.people.pop(),
      ...this.state.people
    ]

    this.setState({ people })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React World</h1>
        <button onClick={ this.switchNameHandler }>Switch Names</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} >{this.state.hobby}</Person>
      </div>
    );
  }
}

export default App;

/*
 * setState will take an object and merge it with the current state, only overriding the given properties
 */
