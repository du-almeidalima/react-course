import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import Radium, {StyleRoot} from "radium";

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
    // Radium CSS
    const btnStyle = {
      transition: '150ms all',
      ':hover': {
        backgroundColor: '#fce38a'
      }
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
        <StyleRoot>
          <div className="App">
            <h1>Hello React World</h1>
            <button className={this.state.showPeople ? 'normal-btn' : 'pressed-btn'}
                    style={btnStyle}
                    onClick={this.togglePeopleHandler}
            >
              Toggle People
            </button>
            {personsHtml}
          </div>
        </StyleRoot>
    )
  }
}

export default Radium(App);

/*
 * Radium wraps our component, and kind injects code into it. This let us write more complex 'JavaScript CSS' with
 * pseudo selectors and media queries for example.
 */
