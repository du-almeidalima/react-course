import React, { Component } from 'react';

export default class UserOutput extends Component {
  style = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  }

  render() {
    return (
      <div>
        <p>Hello, your name is <span style={this.style}>{this.props.name}</span>!</p>
      </div>
    )
  }
}
