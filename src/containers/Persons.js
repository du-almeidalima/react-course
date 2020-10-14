import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const nameGenerator = function* (index = 1) {
    while (true) {
        switch (index % 3) {
            case 0: yield 'Duduzinho';
                break;
            case 1: yield 'Juju';
                break;
            case 2: yield 'Nina';
                break;
            default: yield 'Unknown';
        }

        index = index + 1;
    }
}

class Persons extends Component {
    nameGeneratorFunc = nameGenerator();

    personAddedHandler = () => {

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: this.nameGeneratorFunc.next().value,
            age: Math.floor( Math.random() * 40 )
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
