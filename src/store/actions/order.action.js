import burgerBuilderAPI from "../../api/burger-builder.api";

export const PURCHASE_ORDER_INIT = 'PURCHASE_ORDER_INIT';
export const PURCHASE_ORDER_SUCCESS = 'PURCHASE_ORDER_SUCCESS';
export const PURCHASE_ORDER_FAIL = 'PURCHASE_ORDER_FAIL';
export const PURCHASE_ORDER_START = 'PURCHASE_ORDER_START';

export const purchaseOrder = (orderData) => {
  return dispatch => {
    // Dispatching Sync Action to Update UI Loading State
    dispatch(purchaseOrderStart());

    burgerBuilderAPI.post('/orders.json', orderData)
        .then(resp => {
          const newOrder = { id: resp.data.name, order: orderData}
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
