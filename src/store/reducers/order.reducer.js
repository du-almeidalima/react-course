import * as actionTypes from '../actions/order.action';
import { updateStateObject } from '../util';

const initialState = {
  orders: [],
  isLoading: false,
  purchased: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_ORDER_INIT:
      return updateStateObject(state, { purchased: false });

    case actionTypes.PURCHASE_ORDER_START:
      return updateStateObject(state,{ isLoading: true });

    case actionTypes.PURCHASE_ORDER_SUCCESS:
      const orders = state.orders.concat(action.payload);
      return updateStateObject(state,{ orders, isLoading: false, purchased: true });

    case actionTypes.PURCHASE_ORDER_FAIL:
      return updateStateObject(state, { isLoading: false, purchased: false });

    case actionTypes.FETCH_ORDERS_START:
      return updateStateObject(state,{ isLoading: true });

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateStateObject(state, { orders: action.payload, isLoading: false });

    case actionTypes.FETCH_ORDERS_FAIL:
      return updateStateObject(state,{ isLoading: false });

    default: return { ...state }
  }
}

export default reducer;
