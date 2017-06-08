//import styles
import 'grommet/scss/vanilla/index.scss';
import './styles/custom-style.scss';

import react from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import LoginContainer from './modules/login/containers/LoginContainer';
import UserDashboardContainer from './modules/dashboard/containers/UserDashboardContainer';

import reducers from './reducers';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
ReactDOM.render(
        <App
            centered
        >
            <Header>
                <Box
                    appCentered
                    alignContent="center"
                >
                    <Heading>Need a break?</Heading>
                </Box>
            </Header>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginContainer}/>
                        <Route path="/dashboard" component={UserDashboardContainer}/>
                    </Switch>
                </Router>
            </Provider>
        </App>,
    document.getElementById('content')
);
