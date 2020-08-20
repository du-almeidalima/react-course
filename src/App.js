import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {

  const [hobby, setHobbyState] = useState('I really like watching Netflix');
  const [people, setPeopleState] = useState([
    {name: 'Eduardo', age: 23},
    {name: 'Jolie', age: 25},
    {name: 'Juaum', age: 18}
  ]);

  const switchNameHandler = () => {
    setPeopleState([people.pop(), ...people])
  }

  return (
      <div className="App">
        <h1>Hello React World</h1>
        <button onClick={switchNameHandler}>Switch Names</button>
        <Person name={people[0].name} age={people[0].age}/>
        <Person name={people[1].name} age={people[1].age}/>
        <Person name={people[2].name} age={people[2].age}>{hobby}</Person>
      </div>
  );
}

export default App;

/*
 * React hooks, such as useState, are basically functions that let you add functionalities to functional components.
 * useState returns the stateObject and a function to update it. And you can make multiple calls to this hook for each
 * state.
 */
