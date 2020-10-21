import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import lazyLoadComponent from "./hoc/lazyLoadComponent/lazyLoadComponent";
import {authActions} from "./store/actions/actions";

const lazyAuthComponent = lazyLoadComponent(() => import('./containers/Auth/Auth'));
const lazyCheckoutComponent = lazyLoadComponent(() => import('./containers/Checkout/Checkout'));
const lazyOrderComponent = lazyLoadComponent(() => import('./containers/Orders/Orders'));

function App(props) {
  const onAuthAutoLogin = props.onAuthAutoLogin;

  useEffect(onAuthAutoLogin, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={lazyCheckoutComponent} />
          {/* React Guard */}
          { props.isAuth ? <Route path="/orders" component={lazyOrderComponent} /> : null }
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={ lazyAuthComponent } />
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
