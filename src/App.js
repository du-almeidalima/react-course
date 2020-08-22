import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {name: 'Eduardo', age: 23},
      {name: 'Jolie', age: 25, hobby: 'I really like watching Netflix'},
      {name: 'Juaum', age: 18}
    ],
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
          <React.Fragment>
            {this.state.people.map(person => {
              return (
                  <Person name={person.name} age={person.age}>
                    {person.hobby ? person.hobby : null}
                  </Person>
              )
            })}
          </React.Fragment>
        </div>
    )
  }
}

export default App;

/*
 * Since React wants to be coolest guy of the squad and use pure JS, we need to make those atrocities in order to
 * render dynamic content
 */
