import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import { burgerBuilderActions, orderActions } from '../../store/actions/actions';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import burgerBuilderAPI from '../../api/burger-builder.api';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {
  state = {
    showPurchaseModal: false,
    isLoading: false,
    error: false
  };

  // == LIFECYCLE ==
  componentDidMount() {
    this.props.onFetchIngredients();
  }

  // == METHODS ==
  canPurchase = (ingredients) => {
    return Object.values(ingredients).some(i => i > 0);
  }

  purchaseModalHandler = () => {
    if (this.props.isAuth) {
      this.setState({ showPurchaseModal: true });
    } else {
      this.props.history.push('/auth');
    }
  }

  closePurchaseModalHandler = () => {
    this.setState({ showPurchaseModal: false })
  }

  confirmPurchaseModalHandler = () => {
    // Set 'purchased' to false so User don't get redirected after placing an order
    this.props.onPurchaseInit();
    this.props.history.push('/checkout');
  }

  // == TEMPLATE ==
  render() {
    let removeBtnDisabledIngredients = {};

    if (this.props.ingredients) {
      removeBtnDisabledIngredients = Object.keys(this.props.ingredients)
        .reduce((acc, curr) => {
          acc[curr] = this.props.ingredients[curr] <= 0;
          return acc;
        }, {});
    }

    return (
      <Fragment>
        {
          this.props.ingredients
          ? <Fragment>
              <Modal show={this.state.showPurchaseModal} modalClosed={this.closePurchaseModalHandler}>
                { this.state.isLoading
                  ? <Spinner />
                  : <OrderSummary
                        ingredients={this.props.ingredients}
                        totalPrice={this.props.totalPrice}
                        cancelled={this.closePurchaseModalHandler}
                        confirmed={this.confirmPurchaseModalHandler}
                    />
                }
              </Modal>
              <Burger ingredients={this.props.ingredients} />
            </Fragment>
          : this.props.error
            ? <h2 style={{textAlign: "center", color: 'red'}}>Something went wrong!</h2>
            : <Spinner />
        }
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabledInfo={removeBtnDisabledIngredients}
          totalPrice={this.props.totalPrice}
          canPurchase={this.canPurchase(this.props.ingredients)}
          openPurchaseModal={this.purchaseModalHandler}
          isAuth={this.props.isAuth}
        />
      </Fragment>
    );
  }
}

// == REDUX ==
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: !!state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredientKey) => dispatch(burgerBuilderActions.addIngredient(ingredientKey)),
    onIngredientRemoved: (ingredientKey) => dispatch(burgerBuilderActions.removeIngredient(ingredientKey)),
    onFetchIngredients: () => dispatch(burgerBuilderActions.fetchIngredients()),
    onPurchaseInit: () => { dispatch(orderActions.purchaseOrderInit()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(BurgerBuilder, burgerBuilderAPI) );
