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
        {!this.props.birthday.needsCalcs ? this.props.navbar : null}
        {this.props.birthday.needsCalcs ? this.props.landing : null}
        {!this.props.birthday.needsCalcs ? this.props.body : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  birthday: {
                entered: state.user.entered,
                isValid: state.user.valid,
                date:    state.user.birthday,
                needsCalcs: state.user.needsCalcs,
                formatted: state.user.formatted,
              },
            stars: state.user.stars,
          };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
