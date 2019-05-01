import { combineReducers } from 'redux';

import settingsReducer from './settings.reducer.js';
import themesReducer from './themes.reducers.js';
import authReducer from './auth.reducer.js';
import menuReducer from './menu.reducer.js';

export default combineReducers({
    settings: settingsReducer,
    theme: themesReducer,
    auth: authReducer,
    menu: menuReducer
});
