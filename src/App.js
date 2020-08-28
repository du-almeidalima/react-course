import React, {Component} from 'react';
import appStyle from './App.css';
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
        <div className={appStyle.App}>
          <h1>Hello React World</h1>
          <button className={`${appStyle.Btn} ${this.state.showPeople ? appStyle.Pressed : appStyle.Normal}`} onClick={this.togglePeopleHandler}>
            Toggle People
          </button>
          {personsHtml}
        </div>
    )
  }
}

export default App;

/*
 * To use CSS Modules I ran "npm run eject", and then added to webpack.config.*.js
 * 
* use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      },
    },
    ...
  ]
 */
