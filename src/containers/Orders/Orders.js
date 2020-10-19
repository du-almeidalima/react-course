import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

import Order from "../../components/Order/Order";
import burgerBuilderAPI from "../../api/burger-builder.api";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {orderActions} from "../../store/actions/actions";

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  }

  componentDidMount() {
    if (this.props.isAuth) {
      this.props.onFetchOrders();
    }
  }

  render() {
    return (
      <div>
        { !this.props.isAuth ? <Redirect to=""/> : null }
        <h1 className="PageTitle">Orders</h1>
        { this.props.orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.price}/>
        ))}
      </div>
    );
  }
}

// == REDUX ==
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    isLoading: state.order.isLoading,
    isAuth: !!state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => { dispatch(orderActions.fetchOrders()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, burgerBuilderAPI));
