import React, { Component } from 'react'
import Order from '../../components/Order/Order'

export default class Orders extends Component {
  render() {
    return (
      <div>
        <h1 className="PageTitle">Orders</h1>
        <Order />
        <Order />
        <Order />
      </div>
    )
  }
}
