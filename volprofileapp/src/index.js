import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';

import {reducer} from './store/reducers';
import './index.css';
import App from './App';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>    
    </Router>, 
    document.getElementById('root')
);
