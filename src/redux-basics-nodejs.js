const redux = require('redux');
const createStore = redux.createStore;

// MOCK FUNCTION TO DISPATCH ACTIONS SEQUENTIALLY
function * generateActions() {
  yield { type: 'INC_COUNTER' };
  yield { type: 'ADD_COUNTER', payload: 5 };
  yield { type: 'ADD_COUNTER', payload: 10 };
}

// Initial State
const initialState = {
  counter: null
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter++
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload
      }
  }
}

// Store
const store = createStore(rootReducer);

// Dispatching Action
const actionsGenerator = generateActions();
setInterval(() => {
  const action = actionsGenerator.next();
  store.dispatch(action.value);
}, 1000);

// Subscription
store.subscribe(() => {
  console.log('[Store Subscription]: ', store.getState());
});
