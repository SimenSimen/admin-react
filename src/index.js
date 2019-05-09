import 'core-js/es6/string';
import 'core-js/es6/array';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/object';
import 'core-js/es6/promise';
import 'core-js/es7/object';
import 'core-js/es7/array';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { route } from './core/RouteManager';

import App from './App';

import './i18n';

import configureStore from './store/store';

const store = configureStore();

/* rotue init */
routeRegister();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

function routeRegister() {
    route('post' , '/ajax/login' , 'auth.login');
}