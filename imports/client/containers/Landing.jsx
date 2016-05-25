
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
        // stub for future fading effects during landing to App transition
        // body = window.document.getElementsByTagName('body')[0];
        // this.fadeOut(body)
      }
    }

  componentWillMount() {
    //create body event listener for enter key
  }

  componentWillUnmount() {
    //destroy event listener
  }

  handleEnterKey() {
    props = arguments[0]
    e = arguments[1]
    e.persist()
    var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { //Enter keycode
        e.persist()
        //console.log(e)
        e.preventDefault()
        birthday = window.document.getElementById('birthday')
        //console.log(birthday.value)
        //console.log(props)
        if (birthday.value != this.props.birthday.original) {
          props.actions.setBirthday(birthday.value)
        }
        birthday.blur()
        window.document.getElementById('bd-submit-button').blur()
        window.document.getElementsByTagName('body')[0].click()
      }
  }

  handleSubmit() {
    e = arguments[1];
    props = arguments[0];
    e.preventDefault()
    setTimeout(() => {
      birthday = window.document.getElementById('birthday')
      //console.log(birthday.value)
      //console.log(props)
      if (birthday.value != this.props.birthday.original) {
        props.actions.setBirthday(birthday.value)
      }
      birthday.blur()
    }, 100)
    window.document.getElementById('bd-submit-button').blur()
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
                original: state.user.original,
              },
            stars: state.user.stars,
          };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
