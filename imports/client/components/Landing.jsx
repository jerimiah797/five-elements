
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import * as C from '../constants/constants.js';

//redux imports
import * as actionCreators from '../actions/User.js';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Landing extends Component {

  componentWillReceiveProps(nextProps) {
      console.log(this.props)
      if (nextProps.birthdayCaptured !== this.props.birthdayCaptured) {
        this.props.actions.doCoreCalcs(nextProps.birthday)
      }
    }

  handleEnterKey(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) { //Enter keycode
        e.preventDefault()
        birthday = window.document.getElementById('birthday')
        console.log("handled enter key: "+birthday.value)
        birthday.blur()
        $(document.body).click()
      }
  }

  handleSubmit(e) {
    e.preventDefault()
    birthday = window.document.getElementById('birthday')
    console.log("handled submit button: "+birthday.value)
    this.props.actions.setBirthday(birthday.value)
  }

  render(){

    return(
      <div>

        <nav className="uk-navbar uk-navbar-attached uk-margin-bottom-remove" data-uk-sticky>
          <a className="uk-navbar-brand uk-hidden-small" href="layouts_frontpage.html">Five Elements</a>
          <ul className="uk-navbar-nav uk-hidden-small">
            <li className="uk-active">
              <a href="layouts_frontpage.html">Home</a>
            </li>
            <li>
              <a href="layouts_portfolio.html">Stars</a>
            </li>
            <li>
              <a href="layouts_blog.html">Elements</a>
            </li>
            <li>
              <a href="layouts_documentation.html">Transformations</a>
            </li>
            <li>
              <a href="layouts_contact.html">Trigrams</a>
            </li>
          </ul>
          <div className="uk-navbar-flip">
            <ul className="uk-navbar-nav uk-hidden-small">
              <li>
                <a href="layouts_login.html">Login</a>
              </li>
            </ul>
          </div>
          <a href="#offcanvas" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas />
          <div className="uk-navbar-brand uk-navbar-center uk-visible-small">Five Elements</div>
        </nav>




        <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-1">
              <div className="uk-cover uk-height-viewport  uk-text-center"
                style={{backgroundColor: "#F5F5F5"}}>
                  <div className="uk-grid uk-width-3-4 uk-container-center uk-margin-large-top">
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={C.ICON_SIZE} height={C.ICON_SIZE} src={C.FIRE} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={C.ICON_SIZE} height={C.ICON_SIZE} src={C.SOIL} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={C.ICON_SIZE} height={C.ICON_SIZE} src={C.METAL} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={C.ICON_SIZE} height={C.ICON_SIZE} src={C.WATER} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={C.ICON_SIZE} height={C.ICON_SIZE} src={C.WOOD} alt="" />
                    </div>
                  </div>

                <div className="uk-vertical-align-middle uk-width-7-8">
                            <h1 className="uk-heading-large uk-margin-bottom-remove">
                              The Five Elements</h1>
                            <h5 className="uk-margin-large-bottom uk-margin-top-remove">
                              Achieve Happiness & Harmony in Your Life</h5>
                            <p className="uk-text-large">Enter your birth date to get started </p>
                            <div>
                              <form className="uk-form" ref="ukForm">
                                <input

                                  onKeyPress={this.handleEnterKey.bind(this)}
                                  id="birthday"
                                  type="text"
                                  ref="birthday"
                                  data-uk-datepicker="{format:'MM/DD/YYYY'}"
                                  placeholder="01/15/1976" />
                                <button className="uk-button uk-button-primary"
                                        onClick={this.handleSubmit.bind(this)}>
                                  Submit
                                </button>
                              </form>
                            </div>


                </div>
              </div>
            </div>
          </div>

        <div className="uk-container uk-container-center uk-margin-large-top uk-margin-large-bottom">

          <div className="uk-grid first-row-of-three" data-uk-grid-margin>

            <div className="uk-width-medium-1-3 primary">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">

                  <img data-uk-svg width="35" height="35" src={C.FIRE} alt="" />

                </div>

                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Primary</h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

            <div className="uk-width-medium-1-3 character">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">
                  <img data-uk-svg width="35" height="35" src={C.WOOD} alt="" />
                </div>

                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Character</h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

            <div className="uk-width-medium-1-3 energetic">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">
                  <img data-uk-svg width="35" height="35" src={C.WATER} alt="" />
                </div>

                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Energetic</h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

          </div>

          <div className="uk-grid second-row-of-three" data-uk-grid-margin>

            <div className="uk-width-medium-1-3">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">
                  <img data-uk-svg width="35" height="35" src={C.METAL} alt="" />
                </div>

                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Item 4</h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

            <div className="uk-width-medium-1-3">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">
                  <img data-uk-svg width="35" height="35" src={C.SOIL} alt="" />
                </div>

                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Sample Heading </h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

            <div className="uk-width-medium-1-3">

              <div className="uk-grid">

                <div className="uk-width-1-6 uk-img-preserve">
                  <img data-uk-svg width="35" height="35" src={C.FIRE} alt="" />
                </div>
                <div className="uk-width-5-6">

                  <h2 className="uk-h3">

                    Sample Heading </h2>

                  <p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                </div>

              </div>

            </div>

          </div>

          <hr className="uk-grid-divider" />

          <div className="uk-grid" data-uk-grid-margin>

            <div className="uk-width-medium-1-2">

              <img width={660} height={400}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjYwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA2NjAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NjAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSI2NjAiIGhlaWdodD0iNDAwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0yNTguMTg0LDE0My41djExM2gxNDMuNjMydi0xMTNIMjU4LjE4NHogTTM5MC4yNDQsMjQ0LjI0N0gyNzAuNDM3di04OC40OTRoMTE5LjgwOEwzOTAuMjQ0LDI0NC4yNDcNCgkJTDM5MC4yNDQsMjQ0LjI0N3oiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjI3Ni44ODEsMjM0LjcxNyAzMDEuNTcyLDIwOC43NjQgMzEwLjgyNCwyMTIuNzY4IDM0MC4wMTYsMTgxLjY4OCAzNTEuNTA1LDE5NS40MzQgDQoJCTM1Ni42ODksMTkyLjMwMyAzODQuNzQ2LDIzNC43MTcgCSIvPg0KCTxjaXJjbGUgZmlsbD0iI0Q4RDhEOCIgY3g9IjMwNS40MDUiIGN5PSIxNzguMjU3IiByPSIxMC43ODciLz4NCjwvZz4NCjwvc3ZnPg0K"
              alt />

            </div>

            <div className="uk-width-medium-1-2">

              <h1>Heading</h1>

              <p>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. </p>

              <h2>Subheading</h2>

              <p>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. </p>

              <a className="uk-button uk-button-primary" href="#">Button</a>

            </div>

          </div>

          <hr className="uk-grid-divider" />

          <div className="uk-grid" data-uk-grid-margin>

            <div className="uk-width-medium-1-2">

              <h1>Heading</h1>

              <p>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. </p>

              <h2>Subheading</h2>

              <p>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. </p>

              <a className="uk-button uk-button-primary" href="#">Button</a>

            </div>

            <div className="uk-width-medium-1-2">

              <img width={660} height={400}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjYwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA2NjAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NjAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSI2NjAiIGhlaWdodD0iNDAwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0yNTguMTg0LDE0My41djExM2gxNDMuNjMydi0xMTNIMjU4LjE4NHogTTM5MC4yNDQsMjQ0LjI0N0gyNzAuNDM3di04OC40OTRoMTE5LjgwOEwzOTAuMjQ0LDI0NC4yNDcNCgkJTDM5MC4yNDQsMjQ0LjI0N3oiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjI3Ni44ODEsMjM0LjcxNyAzMDEuNTcyLDIwOC43NjQgMzEwLjgyNCwyMTIuNzY4IDM0MC4wMTYsMTgxLjY4OCAzNTEuNTA1LDE5NS40MzQgDQoJCTM1Ni42ODksMTkyLjMwMyAzODQuNzQ2LDIzNC43MTcgCSIvPg0KCTxjaXJjbGUgZmlsbD0iI0Q4RDhEOCIgY3g9IjMwNS40MDUiIGN5PSIxNzguMjU3IiByPSIxMC43ODciLz4NCjwvZz4NCjwvc3ZnPg0K"
              alt />

            </div>

          </div>

          <hr className="uk-grid-divider" />

          <div className="uk-grid" data-uk-grid-margin>

            <div className="uk-width-medium-1-1">

              <div className="uk-panel uk-panel-box uk-text-center">

                <p>

                  <strong>

                    Phasellus viverra nulla ut metus. </strong> Quisque rutrum etiam
                    ultricies nisi vel augue. <a className="uk-button
                    uk-button-primary uk-margin-left" href="#">Button</a> </p>

              </div>

            </div>

          </div>

          <h1 className="uk-text-center">

            Our Clients </h1>

          <div className="uk-grid" data-uk-grid-margin>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

            <div className="uk-width-1-2 uk-width-medium-1-3 uk-width-large-1-6">

              <figure className="uk-overlay uk-overlay-hover">

                <img width={350} height={150}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMTUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMTUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNGNUY1RjUiIHdpZHRoPSIzNTAiIGhlaWdodD0iMTUwIi8+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0xMzEuOTEsNDEuMXY2Ny44aDg2LjE4VjQxLjFIMTMxLjkxeiBNMjExLjE0NiwxMDEuNTQ5SDEzOS4yNlY0OC40NTFoNzEuODg3VjEwMS41NDl6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0Q4RDhEOCIgcG9pbnRzPSIxNDMuMTI5LDk1LjgzIDE1Ny45NDMsODAuMjU4IDE2My40OTQsODIuNjYgMTgxLjAwOSw2NC4wMTQgMTg3LjkwMiw3Mi4yNiAxOTEuMDE0LDcwLjM4MiANCgkJMjA3Ljg0OCw5NS44MyAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMTYwLjI0MyIgY3k9IjYxLjk1NCIgcj0iNi40NzIiLz4NCjwvZz4NCjwvc3ZnPg0K"
                alt />

                <figcaption className="uk-overlay-panel uk-overlay-background
                uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">

                  <div>

                    Client Name </div>

                </figcaption>

                <a className="uk-position-cover" href="#" />

              </figure>

            </div>

          </div>

        </div>

      <div id="offcanvas" className="uk-offcanvas">
        <div className="uk-offcanvas-bar">
          <ul className="uk-nav uk-nav-offcanvas">
            <li>
              <a href="layouts_frontpage.html">Frontpage</a>
            </li>
            <li>
              <a href="layouts_portfolio.html">Portfolio</a>
            </li>
            <li className="uk-active">
              <a href="layouts_blog.html">Blog</a>
            </li>
            <li>
              <a href="layouts_documentation.html">Documentation</a>
            </li>
            <li>
              <a href="layouts_contact.html">Contact</a>
            </li>
            <li>
              <a href="layouts_login.html">Login</a>
            </li>
          </ul>
        </div>
      </div>



      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birthdayCaptured: state.user.birthdayCaptured,
            birthday: state.user.birthday};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
