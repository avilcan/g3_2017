import Component from 'react';
import { connect } from 'react-redux';

import LoginComponent from '../components/LoginComponent';
import { loginUser } from '../reducers/LoginReducer';

class LoginContainer extends React.Component {
  render() {
    return (<LoginComponent
        onLogin={this.props.dispatchLoginUser}
    />);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (username, pass) => {
      dispatch(loginUser(username, pass))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);