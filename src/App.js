import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React World
        <Person name={'Eduardo'} age={23} />
        <Person name={'Jolie'} age={25} />
      </div>
    );
  }
}

export default App;
