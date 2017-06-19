import Component from 'react';
import { connect } from 'react-redux';

import UserDashboardComponent from '../components/UserDashboardComponent';
import { getUserRemainingDays } from '../reducers/DashboardReducer';

class UserDashboardContainer extends React.Component {
  constructor(props) {
      super(props);
      this.onOptionClicked = this.onOptionClicked.bind(this);
  }

  onOptionClicked(){
    console.log("on option clicked");
  }

  render() {
      console.log(this.props.remainingDays);
    return (<UserDashboardComponent 
        onOptionClicked={this.onOptionClicked}
    />);
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
      remainingDays: dispatch(getUserRemainingDays()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardContainer);