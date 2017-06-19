import { getRemainingDays } from '../../../Api';
/**
 * Actions
 */
const REMAINING_DAYS_FETCHED = 'USER/REMAINING_DAYS_FETCHED';

/**
 * Action creators
 */

function setRemainingDays(resp) {
    return {
        type: REMAINING_DAYS_FETCHED,
        payload: resp,
    };
}

/**
 * Async Actions
 */

export function getUserRemainingDays() {
    return dispatch => {
        getRemainingDays().then(
            response => dispatch(setRemainingDays(response))
        )
    }
}

const initialState = {
    remainingDays: null,
}

export function DashboardReducer(state= initialState, action) {
    switch(action.type) {
        case REMAINING_DAYS_FETCHED:
            return [...state, {remainingDays: action.payload}];
        default:
            return state;
    }
}