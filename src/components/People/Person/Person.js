import React, { Component } from "react";
import personStyles from "./Person.css";

class Person extends Component {
  render() {
    return (
      <div className={personStyles.Person}>
        <span className={personStyles.Close} onClick={this.props.closeClickHandler}>
          &times;
        </span>
        <h3>
          Hey! I'm {this.props.name} and I have {this.props.age} years old!
        </h3>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={(e) => this.props.inputHandler(e)}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
