import React from 'react'
import StarPanel from './StarPanel.jsx'

export const BodyFSC = (props) =>

      <div>

        <div className="uk-container uk-container-center uk-margin-large-top uk-margin-large-bottom">

          <div className="uk-grid uk-margin-bottom" data-uk-grid-margin>
            <div className="uk-width-medium-1-1">
            <h1>Birthday chosen:  {props.birthday.formatted}
                  <a className="uk-button uk-button-primary uk-margin-left" href="#">Start Over</a></h1>
            </div>
          </div>

          <hr className="uk-grid-divider uk-margin-large-bottom" />

          <div className="uk-grid uk-grid-large first-row-of-three uk-margin-top" data-uk-grid-margin>

            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[0]} position={props.C.ARRAY_POSITION_MAP[0]}/>
            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[1]} position={props.C.ARRAY_POSITION_MAP[1]}/>
            <StarPanel C={props.C} stars={props.stars} starNumber={props.stars[2]} position={props.C.ARRAY_POSITION_MAP[2]}/>

          </div>


          <hr className="uk-grid-divider uk-margin-large-top" />

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
                  <strong>Phasellus viverra nulla ut metus. </strong>
                  Quisque rutrum etiam ultricies nisi vel augue.
                  <a className="uk-button uk-button-primary uk-margin-left" href="#">Button</a>
                </p>
              </div>
            </div>
          </div>



          <h1 className="uk-text-center">
            Our Clients
          </h1>

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

      </div>
