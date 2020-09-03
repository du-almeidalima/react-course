import React, { Component } from "react";
import personStyles from "./Person.css";
import withClass from "../../../hoc/WithClass";
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // this.inputRef.focus();
    this.inputRef.current.focus();
    console.log('[Person] context', this.context);
  }

  render() {
    return (
      <React.Fragment>
        { this.context.authenticated ? <span>I'm Authenticated</span> : <span>Not Authenticated</span> }
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

/*
 * To use the Context API as a Consumer we can do the following in the JSX.
 *
 *  <AuthContext.Consumer>
 *    {(context) => (
 *      context.authenticated ? <span>I'm Authenticated</span> : <span>Not Authenticated</span>
 *    )}
 *  </AuthContext.Consumer>
 *
 * The Context.Consumer receives not a children
 * but a function with a 'context' parameter that React will inject, and in this way we can use the state.
 */

/*
 * Alternatively we can also use another syntax te reach the context, the ' static contextType = AuthContext; '
 * With this, react will kinda inject/create the context into a property 'context' in the current class. So the context
 * can be accessed with just 'this.context'
 */
