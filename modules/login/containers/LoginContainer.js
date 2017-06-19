import Component from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginComponent from '../components/LoginComponent';
import { loginUser } from '../reducers/LoginReducer';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      redirect: false,
    }
  }
  loginUser(payload) {
    //this.props.dispatchLoginUser(payload);
    // we should redirect user only after login is complete
    this.setState({
      redirect: true,
    })
  }
  render() {
    if (this.state.redirect) {
      return (<Redirect to="/dashboard" />);
    }
    return (<LoginComponent
        onLogin={this.loginUser}
    />);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (payload) => {
      dispatch(loginUser(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);