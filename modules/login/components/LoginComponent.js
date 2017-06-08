import React, {PropTypes} from 'react';
import LoginForm from 'grommet/components/LoginForm';

const LoginComponent = (props) => {
    return (
        <LoginForm onSubmit={props.onLogin} />
    )
}

export default LoginComponent;