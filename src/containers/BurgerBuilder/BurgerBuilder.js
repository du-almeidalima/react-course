import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
  };

  addIngredientHandler = (ingredientType) => {
    const totalPrice =
      INGREDIENTS_PRICE.get(ingredientType) + this.state.totalPrice;
    const ingredientCount = this.state.ingredients[ingredientType] + 1;
    const ingredients = {
      ...this.state.ingredients,
      [ingredientType]: ingredientCount,
    };

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

    this.setState({
      ingredients,
      totalPrice,
    });
  };

  render() {
    const removeBtnDisabledIngredients = Object.keys(this.state.ingredients)
    .reduce((acc, curr) => {
      acc[curr] = this.state.ingredients[curr] <= 0;
      return acc;
    }, {});

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={removeBtnDisabledIngredients}
          totalPrice={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}
