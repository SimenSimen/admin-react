import 'core-js/es6/string'
import 'core-js/es6/array'
import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/es6/object'
import 'core-js/es6/promise'
import 'core-js/es7/object'
import 'core-js/es7/array'
import 'raf/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import './i18n'
import './ajaxAxios'
import './ajaxRoute'

import store from './store/store'

global.ENV_DEV = 'development'
global.ENV_PROD = 'production'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
