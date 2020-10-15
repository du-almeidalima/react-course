export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
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

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    payload: result
  }
}

export const deleteResult = (elIndex) => {
  return {
    type: DELETE_RESULT,
    payload: elIndex
  }
}
