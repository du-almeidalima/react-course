export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

/*
 * This is going to mock a async function, that will return a function that receives the dispatch function as a
 * parameter. This dispatch function is going to be injected by the Redux-Thunk middleware. With that, this action
 * can dispatch another action
 */
export const storeResult = (result) => {
  return dispatch => {
    // Mock request
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000)
  }
}

// Synchronous function to update the state
export const saveResult = (result) => {
  return {
    type: SAVE_RESULT,
    payload: result
  }
}

export const deleteResult = (elIndex) => {
  return {
    type: DELETE_RESULT,
    payload: elIndex
  }
}
