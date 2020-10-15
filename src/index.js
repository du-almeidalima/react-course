import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// This is a middleware, in Redux is a piece of code or a function that will receive the store, the dispatcher and
// the action as arguments of nested functions. The middleware will not block the flow, it will just take those
// parameters and use them.
const loggerMiddleware = store => {
  // Dispatcher
  return next => {
    return action => {
      const result = next(action);

      console.log(`[${action.type}]: `, store.getState());
      return result;
    }
  }
}
// The compose function will work as a combineReducers but for StoreEnhancers.
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ will automatically inject the StoreEnhancers for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// applyMiddleware is a StoreEnhancer, to user more than one StoreEnhance we need to use a function similar to
// combineReducers
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

/*
 * The state now will be this object of the combined reducers. However, a reducer cannot access the state of the other
 */

/*
 * REDUX THUNK: Redux thunk works somewhat as the loggerMiddleware, but what it does is that, it injects the dispatcher
 * function into the action. This way, an action can execute async code, and dispatch another action with the result of
 * the async operation.
 */
