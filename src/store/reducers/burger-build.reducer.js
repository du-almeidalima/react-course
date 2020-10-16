import * as actionTypes from '../actions/burger-build.action';

const INGREDIENTS_PRICE = new Map([
  ["salad", 0.5],
  ["bacon", 1.5],
  ["cheese", 1.0],
  ["meat", 3.0],
]);

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0
  },
  totalPrice: 4
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICE.get(action.payload)
      }

    case actionTypes.REMOVE_INGREDIENT:
      const updatedIngredients = {...state.ingredients};
      let totalPrice = state.totalPrice;

      if (updatedIngredients[action.payload] > 0) {
        updatedIngredients[action.payload] = updatedIngredients[action.payload] - 1;
        totalPrice -= INGREDIENTS_PRICE.get(action.payload);
      } else {
        updatedIngredients[action.payload] = 0;
      }


      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice
      }

    default:
      return state
  }
}

export default reducer;
