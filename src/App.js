import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {name: 'Eduardo', age: 23},
      {name: 'Jolie', age: 25},
      {name: 'Juaum', age: 18}
    ],
    hobby: 'I really like watching Netflix'
  }

  switchNameHandler = (name) => {
    const newPerson = this.state.people.pop();
    newPerson.name = name;

    const people = [newPerson, ...this.state.people]
    this.setState({people});
  }

  inputHandler = (e) => {
    const newName = e.target.value;
    const person = this.state.people[0]
    person.name = newName;

    this.setState({people: [person, ...this.state.people.slice(1)]})
  }

  render() {
    return (
        <div className="App">
          <h1>Hello React World</h1>
          <button onClick={() => this.switchNameHandler('Adolfo')}>Switch Names</button>
          <Person clickHandler={this.switchNameHandler.bind(this, 'Juaum1')}
                  name={this.state.people[0].name}
                  age={this.state.people[0].age}
                  input={this.inputHandler}
          />
          <Person clickHandler={this.switchNameHandler.bind(this, 'Juaum2')}
                  name={this.state.people[1].name}
                  age={this.state.people[1].age}
          />
          <Person clickHandler={this.switchNameHandler.bind(this, 'Juaum3')}
                  name={this.state.people[2].name}
                  age={this.state.people[2].age}>
            {this.state.hobby}
          </Person>
        </div>
    )
  }
}

export default App;

/*
 * There is two ways of passing a function with parameters that are going to be executed in other component
 *  - bind(this, ...args)
 *  - arrow function: () => { this.customFunction('parameter') }
 */
