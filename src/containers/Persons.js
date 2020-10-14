import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    personAddedHandler = (personForm) => {

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: personForm.name,
            age: personForm.age
        }

        this.props.onAddPerson(newPerson);
    }


    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: (person) => dispatch({ type: actionTypes.ADD_PERSON, payload: person }),
        onDeletePerson: (id) => dispatch({ type: actionTypes.DELETE_PERSON, payload: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
