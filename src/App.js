import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import {authActions} from "./store/actions/actions";

function App(props) {

  props.onAuthAutoLogin();

  console.log(props.isAuth)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          {/* React Guard */}
          { props.isAuth ? <Route path="/orders" component={Orders} /> : null }
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

// == REDUX ==
const mapStateToProps = (state) => {
  return {
    isAuth: !!state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthAutoLogin: () => { dispatch(authActions.authAutoLogin()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
