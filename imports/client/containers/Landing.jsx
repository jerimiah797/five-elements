
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as C from '../constants/constants.js';
import {LandingFSC} from '../components/Landing.jsx'

//redux imports
import * as actionCreators from '../actions/User.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Landing extends Component {

  componentWillReceiveProps(nextProps) {
      if (nextProps.birthday.entered && nextProps.birthday.isValid && nextProps.birthday.needsCalcs) {
        this.props.actions.doCoreCalcs(nextProps.birthday.date)
        // birthday = window.document.getElementById('birthday')
        // this.fadeOut(birthday)
      }
    }

  handleEnterKey(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { //Enter keycode
        e.preventDefault()
        birthday = window.document.getElementById('birthday')
        //console.log("handled enter key: "+birthday.value)
        birthday.blur()
        //$(document.body).click()
        body = window.document.getElementsByTagName('h1')
        body[0].focus()
      }
  }

  handleSubmit() {
    e = arguments[1];
    props = arguments[0];
    e.preventDefault()
    setTimeout(() => {
      birthday = window.document.getElementById('birthday')
      console.log(birthday.value)
      console.log(props)
      props.actions.setBirthday(birthday.value)
    }, 200)
  }

  fadeOut(element) {
      var opacity = 1;
      function decrease () {
          opacity -= 0.05;
          if (opacity <= 0){
              // complete
              element.style.opacity = 0;
              return true;
          }
          element.style.opacity = opacity;
          requestAnimationFrame(decrease);
      }
      decrease();
  }

  render() {
    needsCalcs = this.props.birthday.needsCalcs

    return(
      <div>
        <LandingFSC actions={this.props.actions} birthday={this.props.birthday} stars={this.props.stars} C={C} handleEnterKey={this.handleEnterKey} handleSubmit={this.handleSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
