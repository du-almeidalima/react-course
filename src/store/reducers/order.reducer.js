import * as actionTypes from '../actions/order.action';

const initialState = {
  orders: [],
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_ORDER_START:
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.PURCHASE_ORDER_SUCCESS: {
      return {
        ...state,
        orders: state.orders.concat(action.payload),
        isLoading: false
      }
    }

    case actionTypes.PURCHASE_ORDER_FAIL: {
      return {
        ...state,
        isLoading: false
      }
    }

    default:
      return {
        ...state
      }
  }
}

export default reducer;
