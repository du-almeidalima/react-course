import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = new Map([
  ["salad", 0.5],
  ["bacon", 1.5],
  ["cheese", 1.0],
  ["meat", 3.0],
]);

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    showPurchaseModal: false
  };

  addIngredientHandler = (ingredientType) => {
    const totalPrice =
      INGREDIENTS_PRICE.get(ingredientType) + this.state.totalPrice;
    const ingredientCount = this.state.ingredients[ingredientType] + 1;
    const ingredients = {
      ...this.state.ingredients,
      [ingredientType]: ingredientCount,
    };

    this.updatePurchasableState(ingredients);
    this.setState({
      ingredients,
      totalPrice,
    });
  };

  removeIngredientHandler = (ingredientType) => {
    if (this.state.ingredients[ingredientType] <= 0) {
      return;
    }

    const totalPrice =
      this.state.totalPrice - INGREDIENTS_PRICE.get(ingredientType);
    const ingredientCount = this.state.ingredients[ingredientType] - 1;
    const ingredients = {
      ...this.state.ingredients,
      [ingredientType]: ingredientCount,
    };

    this.updatePurchasableState(ingredients);
    this.setState({
      ingredients,
      totalPrice,
    });
  };

  updatePurchasableState = ingredients => {
    const purchasable = Object.values(ingredients).some(i => i > 0);
    this.setState({
      ...this.state,
      purchasable
    })
  }

  purchaseModalHandler = () => {
    this.setState({ showPurchaseModal: true });
  }

  render() {
    console.log('Called');

    const removeBtnDisabledIngredients = Object.keys(this.state.ingredients)
    .reduce((acc, curr) => {
      acc[curr] = this.state.ingredients[curr] <= 0;
      return acc;
    }, {});

    return (
      <Fragment>
        <Modal show={this.state.showPurchaseModal}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={removeBtnDisabledIngredients}
          totalPrice={this.state.totalPrice}
          canPurchase={this.state.purchasable}
          openPurchaseModal={this.purchaseModalHandler}
        />
      </Fragment>
    );
  }
}
