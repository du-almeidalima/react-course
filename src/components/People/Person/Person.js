import React, { Component } from "react";
import personStyles from "./Person.css";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // this.inputRef.focus();
    this.inputRef.current.focus();
  }

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
          // ref={inputEl => { this.inputRef = inputEl }}
          ref={this.inputRef}
          type="text"
          onChange={(e) => this.props.inputHandler(e)}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default withClass(Person, personStyles.Person);
