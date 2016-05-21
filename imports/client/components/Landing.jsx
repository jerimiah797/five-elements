
import React, { Component } from 'react';

export default class Landing extends Component {
  render(){
    return(
      <div>
        <div className="uk-cover-background uk-height-viewport" style={{backgroundImage: "url(images/placeholder_600x400.svg)"}}>
          <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-flex-space-around">
              <div className="uk-flex uk-flex-center">
                <h1>Meteor-React-UIkit</h1>
              </div>
              <div className="uk-flex uk-flex-center uk-text-center">
                <h5>Includes Redux, React-Router, Meteor Accounts Integration along with sample actions, reducers, routes, Meteor Data Containers</h5>
              </div>
          </div>
          <div className="uk-position-cover uk-flex uk-flex-center uk-flex-bottom">
              <h5>This is a nice place for a footer</h5>
          </div>
        </div>
      </div>
    )
  }
}
