import { login } from '../../../Api';
/**
 * Actions
 */
const USER_SUCCESSFULLY_LOGGED_IN = 'login/USER_SUCCESSFULLY_LOGGED_IN';

/**
 * Action creators
 */

function loggedInUser(resp) {
    return {
        type: USER_SUCCESSFULLY_LOGGED_IN,
        payload: resp,
    };
}

/**
 * Async Actions
 */

export function loginUser(user, pass) {
    return dispatch => {
        login({
            username: user,
            password: pass,
        }).then(
            response => dispatch(loggedInUser(response))
        )
    }
}

const initialState = {
    loggedInUser: {}
}

export function LoginReducer(state= initialState, action) {
    switch(action.type) {
        case USER_SUCCESSFULLY_LOGGED_IN:
            return [...state, {loggedInUser: action.payload}];
        default:
            return state;
    }
}