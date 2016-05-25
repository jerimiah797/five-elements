
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as C from '../constants/constants.js';
import {BodyFSC} from '../components/Body.jsx'

//redux imports
import * as actionCreators from '../actions/User.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Body extends Component {

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return(
      <div>
        <BodyFSC actions={this.props.actions} birthday={this.props.birthday} stars={this.props.stars} C={C} />
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);
