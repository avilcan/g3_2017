import { combineReducers } from 'redux';
import { LoginReducer } from './modules/login/reducers/LoginReducer';

const reducers = combineReducers({
    login: LoginReducer,
});

export default reducers;