import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import burgerBuilderAPI from '../../api/burger-builder.api';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICE = new Map([
  ["salad", 0.5],
  ["bacon", 1.5],
  ["cheese", 1.0],
  ["meat", 3.0],
]);

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    showPurchaseModal: false,
    isLoading: false,
    error: false
  };

  // == LIFECYCLE ==
  componentDidMount() {
    burgerBuilderAPI.get('/ingredients.json')
      .then(res => {
        console.log(res);
        this.setState({ ingredients: res.data });
      })
      .catch( err => {
        console.error('[BurgerBuilder]: ', err);
        this.setState({ error: true })
      });
  }

  // == METHODS ==
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

  closePurchaseModalHandler = () => {
    this.setState({ showPurchaseModal: false })
  }

  confirmPurchaseModalHandler = () => {
    // Showing Spinner
    this.setState({ isLoading: true });

    // Partially Mocked Payload
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Dudu',
        email: 'duduzinhu@gmail.com',
        address: {
          street: 'Rua dos Bobos',
          zipCode: 123456,
          country: 'Brasil'
        },
        deliveryMethod: 'fastest'
      }
    }

    burgerBuilderAPI.post('/orders', order)
        .then(resp => { console.log(resp) })
        .catch(err => { console.error(err) })
        .finally(() => {
          // Hiding Spinner
          this.setState({ isLoading: false, showPurchaseModal: false });
        })
  }

  // == TEMPLATE ==
  render() {
    let removeBtnDisabledIngredients = {};

    if (this.state.ingredients) {
      removeBtnDisabledIngredients = Object.keys(this.state.ingredients)
        .reduce((acc, curr) => {
          acc[curr] = this.state.ingredients[curr] <= 0;
          return acc;
        }, {});
    }

    return (
      <Fragment>
        {
          this.state.ingredients
          ? <Fragment>
              <Modal show={this.state.showPurchaseModal} modalClosed={this.closePurchaseModalHandler}>
                { this.state.isLoading
                  ? <Spinner />
                  : <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancelled={this.closePurchaseModalHandler}
                        confirmed={this.confirmPurchaseModalHandler}
                    />
                }
              </Modal>
              <Burger ingredients={this.state.ingredients} />
            </Fragment>
          : this.state.error 
            ? <h2 style={{textAlign: "center", color: 'red'}}>Something went wrong!</h2>
            : <Spinner />
        }
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

export default withErrorHandler(BurgerBuilder, burgerBuilderAPI);
