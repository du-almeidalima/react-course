import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import { authActions } from "../../../store/actions/actions";

// The sole purpose of this component is to render, dispatch logout action and redirect
class MyComponent extends Component {

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => { dispatch(authActions.authLogout()) }
  };
}

export default connect(null, mapDispatchToProps)(MyComponent);
