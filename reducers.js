import { combineReducers } from 'redux';
import { LoginReducer } from './modules/login/reducers/LoginReducer';
import { DashboardReducer } from './modules/dashboard/reducers/DashboardReducer';

const reducers = combineReducers({
    login: LoginReducer,
    daashboard: DashboardReducer,
});

export default reducers;