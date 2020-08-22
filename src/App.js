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
    hobby: 'I really like watching Netflix',
    showPeople: false
  }

  togglePeopleHandler = () => {
    this.setState({showPeople: !this.state.showPeople})
  }

  inputHandler = (e) => {
    const newName = e.target.value;
    const person = this.state.people[0]
    person.name = newName;

    this.setState({people: [person, ...this.state.people.slice(1)]})
  }

  render() {
    const style = {
      background: 'lightblue',
      fontWeight: 'bold',
      padding: '10px 5px',
      border: '1px solid black',
      cursor: 'pointer'
    }

    return (
        <div className="App">
          <h1>Hello React World</h1>
          <button style={style} onClick={this.togglePeopleHandler}>Toggle People</button>
          {
            this.state.showPeople
                ?
                <div>
                  <Person name={this.state.people[0].name} age={this.state.people[0].age} input={this.inputHandler}/>
                  <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
                  <Person name={this.state.people[2].name} age={this.state.people[2].age}>
                    {this.state.hobby}
                  </Person>
                </div>
                : null
          }
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
