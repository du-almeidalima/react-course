import React, { Component } from 'react';

class Course extends Component {
    
    render () {

        const id = this.props.match.params.id;
        const courseTitle = new URLSearchParams(this.props.location.search).get('title');

        return (
            <div>
                <h1>{courseTitle}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;