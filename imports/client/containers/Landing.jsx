
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as C from '../constants/constants.js';
import {LandingFSC} from '../components/Landing.jsx'
import {NavbarFSC} from '../components/Navbar.jsx'

//redux imports
import * as actionCreators from '../actions/User.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Landing extends Component {

  componentWillReceiveProps(nextProps) {
      if (nextProps.birthday.entered && nextProps.birthday.isValid && nextProps.birthday.needsCalcs) {
        this.props.actions.doCoreCalcs(nextProps.birthday.date)
      }
    }

  handleEnterKey(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { //Enter keycode
        e.preventDefault()
        birthday = window.document.getElementById('birthday')
        //console.log("handled enter key: "+birthday.value)
        birthday.blur()
        $(document.body).click()
      }
  }

  handleSubmit() {
    // for(var i=0; i<arguments.length; i++) {
    //   console.log(arguments[i])
    // }
    e = arguments[1];
    props = arguments[0];

    e.preventDefault()
    //console.log(e, props)
    // setTimeout(function(){
  //      birthday = window.document.getElementById('birthday')
  //      console.log(birthday.value)
  //      console.log(props)
  //      props.actions.setBirthday(birthday.value)
  //   }, 500);
    setTimeout(() => {
      birthday = window.document.getElementById('birthday')
      console.log(birthday.value)
      console.log(props)
      props.actions.setBirthday(birthday.value)
    }, 200)


    //console.log("handled submit button: "+birthday.value)
    //this.props.actions.setBirthday(birthday.value)
  }

  render(){
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
