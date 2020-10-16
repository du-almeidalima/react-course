import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from './Contact/Contact';

class Checkout extends Component {
  render() {
    let content = <Redirect to="/"/>;

    if (Object.keys(this.props.ingredients).length > 0) {
      content = (
          <div>
            <h1 className="PageTitle">Checkout</h1>
            <CheckoutSummary ingredients={this.props.ingredients}/>
            <Route path={this.props.match.path + '/contact'} component={Contact}/>
          </div>
      )
    }

    return content;
  }
}

// == REDUX ==
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients
  }
}

export default connect(mapStateToProps)(Checkout);
