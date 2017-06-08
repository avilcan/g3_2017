import Component from 'react';
import { connect } from 'react-redux';


class UserDashboardContainer extends React.Component {
  render() {
    return (<div>User dashboard</div>);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardContainer);