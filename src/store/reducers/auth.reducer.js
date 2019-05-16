import { USER_LOGIN, USER_LOGOUT } from '../actions/actions';
import Manager from '../../core/AjaxManager';

const initialState = {
    login: false,
    userInfo: null,
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_LOGIN:
            const defaultAjaxInstance = Manager.getInstance();    
            const jwt = "Bearer " + action.authState.jwt;
            
            if (!!defaultAjaxInstance._axios.defaults.headers.Authorization) {
                delete defaultAjaxInstance._axios.defaults.headers.Authorization;
            }
                
            defaultAjaxInstance._axios.defaults.headers.common = {
                Authorization: jwt
            };
            
        
            return Object.assign({}, state, {
                login: action.authState.login,
                userInfo: action.authState.userInfo,
                jwt: action.authState.jwt,
            });

        case USER_LOGOUT:
            return Object.assign({}, state, {
                login: false,
                userInfo: null,
                jwt: null
            });
            
        default:
            return state;
    }
}

export default authReducer;