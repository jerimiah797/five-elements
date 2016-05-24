
import React from 'react';

//export default class LandingFSC extends Component {


  //render(){
    //console.log(props)

    //return(

export const NavbarFSC = (props) =>

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
