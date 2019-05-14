import { CHANGE_LOGIN_STATE } from '../actions/actions';

const initialState = {
    login: false,
    userInfo: null,
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return Object.assign({}, state, {
                login: action.authState.login,
                userInfo: action.authState.userInfo,
                jwt: action.authState.jwt,
            });
        default:
            return state;
    }
}

export default authReducer;