// App.jsx
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
//redux imports
import * as actionCreators from '../actions/User.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class App extends Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { birthdayCaptured: state.user.birthdayCaptured,
            birthday: state.user.birthday};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
