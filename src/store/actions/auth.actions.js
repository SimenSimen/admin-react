export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
/**
 * Change the login state
 */
export function changeLoginState(authState) {
    return { type: USER_LOGIN , authState };
}

/* 
 * logout user
 */
export function userLogout() {
    return { type: USER_LOGOUT };
}