import burgerBuilderAPI from "../../api/burger-builder.api";

export const PURCHASE_ORDER_INIT = 'PURCHASE_ORDER_INIT';
export const PURCHASE_ORDER_SUCCESS = 'PURCHASE_ORDER_SUCCESS';
export const PURCHASE_ORDER_FAIL = 'PURCHASE_ORDER_FAIL';
export const PURCHASE_ORDER_START = 'PURCHASE_ORDER_START';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

// ======================================
// ======= PURCHASE ORDER ACTIONS =======
// ======================================
export const purchaseOrder = (orderData) => {
  return (dispatch, getState) => {
    // Dispatching Sync Action to Update UI Loading State
    const token = getState().auth?.token;
    dispatch(purchaseOrderStart());

    burgerBuilderAPI.post('/orders.json?auth=' + token, orderData)
        .then(resp => {
          const newOrder = {id: resp.data.name, ...orderData }
          dispatch(purchaseOrderSuccess(newOrder))
        })
        .catch(err => {
          console.log('Error', err)
          dispatch(purchaseOrderFail())
        })
  }
}

// This function purpose is to set purchased to false so the user don't get redirected on Checkout
export const purchaseOrderInit = () => {
  return {
    type: PURCHASE_ORDER_INIT
  }
}

// Sync action that is trigger at the beginning of purchaseOrder to update UI loading
const purchaseOrderStart = () => {
  return {
    type: PURCHASE_ORDER_START
  }
}

const purchaseOrderSuccess = (orderRes) => {
  return {
    type: PURCHASE_ORDER_SUCCESS,
    payload: orderRes
  }
}

const purchaseOrderFail = () => {
  return {
    type: PURCHASE_ORDER_FAIL
  }
}

// ======================================
// ======== FETCH ORDER ACTIONS =========
// ======================================

export const fetchOrders = () => {
  return (dispatch, getState) => {
    const token = getState().auth?.token;
    const userId = getState().auth.userId;
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    dispatch(fetchOrdersStart());
    burgerBuilderAPI.get("/orders.json" + queryParams)
        .then((res) => {
          // FireBase return a Object with all the items, so we need to turn it into an array
          const ordersArr = Object.entries(res.data).map(([key, value]) => {
            return {
              ...value,
              id: key
            }
          });
          dispatch(fetchOrdersSuccess(ordersArr))
        })
        .catch((err) => {
          console.error("[Orders]: ", err);
          dispatch(fetchOrdersFail())
        });
  }
}

const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START
  }
}

const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
  }
}

const fetchOrdersFail = () => {
  return {
    type: FETCH_ORDERS_FAIL
  }
}
