import { CHANGE_LOGIN_STATE } from '../actions/actions';

const initialState = {
    login: false,
    userInfo: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATE:
            return {
                ...state,
                login: action.authState
            }
        default:
            return state;
    }
}

export default authReducer;