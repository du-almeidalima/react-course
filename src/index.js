import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
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

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

/*
 * The state now will be this object of the combined reducers. However, a reducer cannot access the state of the other
 */
