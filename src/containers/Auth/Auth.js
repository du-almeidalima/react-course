import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import * as AuthStyle from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Spinner from '../../components/UI/Spinner/Spinner';
import { authActions } from "../../store/actions/actions";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          name: "email",
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validationRules: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          name: "password",
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validationRules: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formValid: false,
    type: 'signIn'
  };

  validateControl = (value, rules) => {
    let isValid = true;

    // No Rules
    if (rules === undefined) {
      return isValid
    }

    // Is Required
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    // Exact Length
    if (rules.length) {
      isValid = value.length === rules.length && isValid;
    }

    // Min Length
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  }

  // Loop through form controls to check if any is invalid making the form invalid
  validateForm = (updatedForm) => {
    return Object.values(updatedForm).reduce((acc, cur) => {
      if (acc) {
        return !(cur.valid !== undefined && !cur.valid);
      }

      return false;
    }, true)
  }

  handleInputChange = (e, controlKey) => {
    const value = e.target.value;

    // The state needs to be treated immutably, so for each level of object nesting we need to create a shallow copy
    const updatedControls = {
      ...this.state.controls,
      [controlKey]: {
        ...this.state.controls[controlKey],
        value: value,
        valid: this.validateControl(value, this.state.controls[controlKey].validationRules),
        touched: true
      }
    }

    // Validating the overall form
    const formValid = this.validateForm(updatedControls);
    this.setState({ controls: updatedControls, formValid });
  }

  handleFormSubmission = (e) => {
    e.preventDefault();

    // Prevent submission on form invalid
    if (!this.state.formValid) {
      return false;
    }

    const userData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value,
    }

    this.props.onAuth(userData, this.state.type);
  }

  handleSwitchAuthType = () => {
    this.setState((previousState) => {
      return { type: previousState.type === 'signIn' ? 'signUp' : 'signIn' }
    })
  }

  render() {
    const formControls = Object.entries(this.state.controls).map(
      ([controlKey, controlValue]) => {
        return (
          <Input key={controlKey}
            classes={AuthStyle.Control}
            elementType={controlValue.elementType}
            elementConfig={controlValue.elementConfig}
            changed={(e) => { this.handleInputChange(e, controlKey) }}
            valid={controlValue.valid}
            shouldValidate={controlValue.validationRules}
            touched={controlValue.touched}
          />
        );
      }
    );

    const errorMessage = this.props.error
      ? <div className={AuthStyle.Error}>
        { this.props.error.message }
      </div>
      : null;

    return (
      <Fragment>
        <h1 className="PageTitle">Login</h1>
        <div className={AuthStyle.FormWrapper}>
          {this.props.isLoading
            ? <Spinner />
            : <form noValidate onSubmit={this.handleFormSubmission}>
                {formControls}
                <div className={AuthStyle.ActionWrapper}>
                  {/* Error Message */}
                  {errorMessage}
                  <Button classes={AuthStyle.SwitchAuthType} onClick={this.handleSwitchAuthType} type="button">
                    Switch to {this.state.type === 'signIn' ? 'Sign Up' : 'Sign In'}
                  </Button>
                  <Button classes={AuthStyle.LoginBtn} btnType="Success" fillStyle="Full" disabled={!this.state.formValid}>
                    {this.state.type === 'signIn' ? 'Sign In' : 'Sign Up'}
                  </Button>
                </div>
            </form>
          }
        </div>
      </Fragment>
    );
  }
}

// == REDUX ==
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userData, authType) => { dispatch(authActions.auth(userData, authType)) }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);