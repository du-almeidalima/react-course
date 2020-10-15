import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import * as actionTypes from '../../store/burger-build.action';
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
  canPurchase = (ingredients) => {
    return Object.values(ingredients).some(i => i > 0);
  }

  purchaseModalHandler = () => {
    this.setState({ showPurchaseModal: true });
  }

  closePurchaseModalHandler = () => {
    this.setState({ showPurchaseModal: false })
  }

  confirmPurchaseModalHandler = () => {
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
          this.state.ingredients
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
          : this.state.error 
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
        />
      </Fragment>
    );
  }
}

// == REDUX ==
const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredientKey) => dispatch({ type: actionTypes.ADD_INGREDIENT, payload: ingredientKey }),
    onIngredientRemoved: (ingredientKey) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, payload: ingredientKey })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( withErrorHandler(BurgerBuilder, burgerBuilderAPI) );
