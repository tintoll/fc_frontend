import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './modules/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk  from 'redux-thunk';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://api.velog.io/';

const customHistory = createBrowserHistory();

const store = createStore(rootReducer, 
    composeWithDevTools(
        applyMiddleware(ReduxThunk.withExtraArgument({history:customHistory}),logger),
        // other store enhancers if any
    )    
);

ReactDOM.render(
    <Router history={customHistory} >
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
