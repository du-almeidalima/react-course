import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

// Global Request Interceptors
axios.interceptors.request.use(
    // This is useful to attach Headers or any pre-flight configuration
    req => {
        req.headers['CUSTOM_HEADER'] = 'CUSTOM_HEADER_VALUE_XXX';

        return req;
    },
    // This is "catch" when there's an error sending a request, for example no internet connectivity
    reqError => {
        console.error('[Global Request Interceptor] Error: ', reqError);

        return Promise.reject(reqError)
    }
);

// Global Response Interceptor
axios.interceptors.response.use(
    res => {

        return res;
    },
    resError => {
        // This callback is executed when a request is sent but it returns an error
        console.error('[Global Response Interceptor] Error: ', resError);

        return Promise.reject(resError);
    }
)

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

/*
 * Axios is a HttpClient and this configuration is applied to all its "instance"
 */