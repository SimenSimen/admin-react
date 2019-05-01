import { SET_DATA } from '../actions/actions';

const menuReducer = (state = {} , action) => {
    switch (action.type) {
        case SET_DATA:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
}

export default  menuReducer;