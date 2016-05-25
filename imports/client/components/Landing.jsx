import React from 'react';

export const LandingFSC = (props) =>

      <div>
        <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-1">
              <div className="uk-cover uk-height-viewport  uk-text-center"
                style={{backgroundColor: "#F5F5F5"}}>
                  <div className="uk-grid uk-width-3-4 uk-container-center uk-margin-large-top">
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={props.C.ICON_SIZE} height={props.C.ICON_SIZE} src={props.C.FIRE} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={props.C.ICON_SIZE} height={props.C.ICON_SIZE} src={props.C.EARTH} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={props.C.ICON_SIZE} height={props.C.ICON_SIZE} src={props.C.METAL} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={props.C.ICON_SIZE} height={props.C.ICON_SIZE} src={props.C.WATER} alt="" />
                    </div>
                    <div className="uk-width-1-5 uk-margin-large-bottom uk-margin-large-top">
                      <img data-uk-svg width={props.C.ICON_SIZE} height={props.C.ICON_SIZE} src={props.C.WOOD} alt="" />
                    </div>
                  </div>

                <div className="uk-vertical-align-middle uk-width-7-8">
                  <h1 className="uk-heading-large uk-margin-bottom-remove">
                    The Five Elements</h1>
                  <h5 className="uk-margin-large-bottom uk-margin-top-remove">
                    Achieve Happiness & Harmony in Your Life</h5>
                  <p className="uk-text-large">Enter your birth date to get started </p>
                  <div>
                    <form className="uk-form" >
                      <input
                        onKeyPress={props.handleEnterKey.bind(null, props)}
                        id="birthday"
                        type="text"
                        data-uk-datepicker="{format:'MM/DD/YYYY'}"
                        placeholder="01/15/1976" />
                      <button className="uk-button uk-button-primary" id="bd-submit-button"
                        onClick={props.handleSubmit.bind(null, props)}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
