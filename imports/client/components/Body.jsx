import React from 'react'
import StarPanel from './StarPanel.jsx'

export const BodyFSC = (props) =>

      <div>

        <div className="uk-container uk-container-center uk-margin-large-top uk-margin-large-bottom">

          <div className="uk-grid uk-margin-bottom" data-uk-grid-margin>
            <div className="uk-width-medium-1-1">
            <h1>Birthday:  {props.birthday.formatted}
                  <button className="uk-button uk-button-primary uk-margin-left"
                    onClick={props.handleResetButton.bind(null, props)}
                    href="#">Change</button></h1>
            </div>
          </div>

          <hr className="uk-grid-divider uk-margin-large-bottom" />

          <div className="uk-grid uk-grid-large first-row-of-three uk-margin-top" data-uk-grid-margin>
            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[0]} position={props.C.ARRAY_POSITION_MAP[0]}/>
            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[1]} position={props.C.ARRAY_POSITION_MAP[1]}/>
            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[2]} position={props.C.ARRAY_POSITION_MAP[2]}/>
          </div>
        </div>
      </div>
