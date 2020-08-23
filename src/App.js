import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    people: [
      {id: 1, name: 'Eduardo', age: 23},
      {id: 2, name: 'Jolie', age: 25, hobby: 'I really like watching Netflix'},
      {id: 3, name: 'Juaum', age: 18}
    ],
    showPeople: false
  }

  togglePeopleHandler = () => {
    this.setState({showPeople: !this.state.showPeople})
  }

  closePersonHandler = (id) => {
    const filteredPeople = this.state.people.filter(person => person.id !== id);
    this.setState({people: filteredPeople})
  }

  inputHandler = (e, id) => {
    const pIndex = this.state.people.findIndex(p => p.id === id);
    const personCopy = {...this.state.people[pIndex], name: e.target.value};
    const peopleCopy = [...this.state.people];

    peopleCopy[pIndex] = personCopy;

    this.setState({people: peopleCopy})
  }

  render() {
    const buttonStyle = {
      background: this.state.showPeople ? '#c9c9f1' : 'lightblue',
      boxShadow: this.state.showPeople ? 'inset 3px 3px 2px gray' : 'none',
      fontWeight: 'bold',
      padding: '10px 5px',
      border: '1px solid black',
      cursor: 'pointer'
    }

    const personsHtml = this.state.showPeople
        ? (<React.Fragment>
          {this.state.people.map((person, index) => {
            return (
                <Person name={person.name}
                        age={person.age}
                        key={person.id}
                        closeClickHandler={() => {
                          this.closePersonHandler(person.id)
                        }}
                        inputHandler={(event) => {
                          this.inputHandler(event, person.id)
                        }}
                >
                  {person.hobby ? person.hobby : null}
                </Person>
            )
          })}
        </React.Fragment>)
        : ''

    return (
        <div className="App">
          <h1>Hello React World</h1>
          <button style={buttonStyle} onClick={this.togglePeopleHandler}>Toggle People</button>
          {personsHtml}
        </div>
    )
  }
}

export default App;

/*
 * Since everything is JS you can dynamically style using JS
 */
