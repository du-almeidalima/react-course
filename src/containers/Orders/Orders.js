import React, { Component } from "react";
import { connect } from "react-redux";

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
    this.props.onFetchOrders();
  }

  render() {
    return (
      <div>
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
    isLoading: state.order.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => { dispatch(orderActions.fetchOrders()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, burgerBuilderAPI));
