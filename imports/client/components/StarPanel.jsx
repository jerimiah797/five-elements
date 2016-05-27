import React, {Component} from 'react';


//export const StarPanel = (props) =>


export default class StarPanel extends Component {
    render() {
        console.log(this.props)
        return(
            <div className="uk-width-medium-1-3 primary">
              <div className="uk-grid ">
                <h1 className="uk-width-1-1 uk-margin"><strong>{this.props.starNumber}</strong>  {this.props.C.STAR[this.props.starNumber].balance} {this.props.C.STAR[this.props.starNumber].element}</h1>
                <div className="uk-width-1-3 uk-padding-top">
                  <img data-uk-svg width={this.props.C.RESULTS_ICON_SIZE} height={this.props.C.RESULTS_ICON_SIZE} src={this.props.C.STAR[this.props.starNumber].image} alt="" />
                </div>
                <div className="uk-width-2-3 uk-padding-top">
                  <div className="uk-panel uk-panel-header">
                    <p className="uk-panel-title uk-h6">
                      {this.props.C.STAR_POSITION[this.props.position]} Star
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
