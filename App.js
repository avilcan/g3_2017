//import styles
import 'grommet/scss/vanilla/index.scss';

import react from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LoginContainer from './modules/login/containers/LoginContainer';

import reducers from './reducers';

const store = compose(applyMiddleware(thunk))(createStore)(reducers);
ReactDOM.render(
    <App>
        <Article>
            <Provider store={store}>
                <LoginContainer />
            </Provider>
        </Article>
    </App>,
    document.getElementById('content')
);
