export const CHANGE_LOGIN_STATE = 'CHANGE_LOGIN_STATE';

/**
 * Change the login state
 * 
 */
export function changeLoginState(authState) {
    return { type: CHANGE_LOGIN_STATE , authState };
}