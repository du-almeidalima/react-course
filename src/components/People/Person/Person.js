import React, { Component } from "react";
import personStyles from "./Person.css";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default withClass(Person, personStyles.Person);
