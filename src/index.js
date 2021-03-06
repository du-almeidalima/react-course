import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";

import burgerBuilderReducer from "./store/reducers/burger-build.reducer";
import orderReducer from "./store/reducers/order.reducer";
import authReducer from "./store/reducers/auth.reducer";

import './index.css';
import App from './App';

const combinedReducers = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(combinedReducers, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
