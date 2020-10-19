import * as actionTypes from '../actions/burger-build.action';

const INGREDIENTS_PRICE = new Map([
  ["salad", 0.5],
  ["bacon", 1.5],
  ["cheese", 1.0],
  ["meat", 3.0],
]);

const initialState = {
  ingredients: {},
  totalPrice: 4,
  error: false,
  building: false
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
        totalPrice: state.totalPrice + INGREDIENTS_PRICE.get(action.payload),
        building: true
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
        totalPrice,
        building: true
      }

    // This action is called whenever the BurgerBuilder page is visited, therefore resetting the building status
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.payload.salad,
          bacon: action.payload.bacon,
          cheese: action.payload.cheese,
          meat: action.payload.bacon,
        },
        error: false,
        totalPrice: 4.0,
        building: false
      }

    case actionTypes.FETCH_INGREDIENTS_ERROR:
      return {
        ...state,
        ingredients: 0,
        totalPrice: 0,
        error: true
      }

    default:
      return state
  }
}

export default reducer;
