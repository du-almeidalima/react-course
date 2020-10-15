export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';

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
