import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import counterReducer from "./store/reducers/counter.reducer";
import resultReducer from "./store/reducers/result.reducer";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

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

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

/*
 * The state now will be this object of the combined reducers. However, a reducer cannot access the state of the other
 */
