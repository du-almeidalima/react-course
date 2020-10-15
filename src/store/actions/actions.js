export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const SAVE_RESULT = 'SAVE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const incrementCounter = () => {
  return {
    type: INC_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: DEC_COUNTER
  }
}

export const addCounter = (amount) => {
  return {
    type: ADD_COUNTER,
    payload: amount
  }
}

export const removeCounter = (amount) => {
  return {
    type: REMOVE_COUNTER,
    payload: amount
  }
}

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
