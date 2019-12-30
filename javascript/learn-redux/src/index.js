import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './module/index';
import { Provider} from 'react-redux';

const store = createStore(rootReducer); // 스토어를 만듭니다.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));
serviceWorker.unregister();
