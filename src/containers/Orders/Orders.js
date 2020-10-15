import React, { Component } from "react";
import Order from "../../components/Order/Order";
import burgerBuilderAPI from "../../api/burger-builder.api";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  }

  componentDidMount() {
    burgerBuilderAPI.get("/orders.json")
      .then((res) => {
        // FireBase return a Object with all the items, so we need to turn it into an array
        const ordersArr = Object.entries(res.data)
          .map(([key, value]) => {
            return {
              ...value,
              id: key
            }
          });

        this.setState({ orders: ordersArr });
      })
      .catch((err) => {
        console.error("[Orders]: ", err);
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div>
        <h1 className="PageTitle">Orders</h1>
        { this.state.orders.map(order => (
          <Order key={order.id} ingredients={order.ingredients} price={+order.price}/>
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, burgerBuilderAPI);