export const SET_DATA = 'SET_DATA';

/**
 * Change the login state
 * 
 */
export function setData(data) {
    return { type: SET_DATA , data };
}