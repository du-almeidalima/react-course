import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {
    name: '',
    age: ''
  }

  onInputChange(e, name) {
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    return (
        <div className="AddPerson">
          <input type="text" name="name" value={this.state.name} onChange={e => { this.onInputChange(e, 'name' )}}/>
          <input type="number" name="age" value={this.state.age} onChange={e => { this.onInputChange(e, 'age' )}}/>
          <button onClick={() => this.props.personAdded(this.state)}>Add Person</button>
        </div>
    )
  }
}

export default AddPerson;
