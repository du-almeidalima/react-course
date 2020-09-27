import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import initializeAxiosGlobalConfig from "./config/http-axios";

import './index.css';
import App from './App';


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
initializeAxiosGlobalConfig(axios);