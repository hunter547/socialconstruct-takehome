import React from 'react';
import { getLineProps } from './utilities/getLineProps';
import './style/BluePrint.scss'
 
function BluePrint({ pucks }) {

  const puckCoordinates = pucks.coordinates;

  return (
    <div className="blueprint__container">
      <svg className="blueprint" width={235} height={500} viewBox="9725 125 10000 375" preserveAspectRatio="xMinYMin slice">
        <g id="puck">
          {puckCoordinates.map(singlePuckCoordinates => {
            const puckParameters = getLineProps(singlePuckCoordinates);
            return puckParameters.map(puck => (
                <line {...puck} stroke="black" strokeWidth={0.5} />
              )
            )
          })}
        </g>
      </svg>
    </div>
  )
}
 
export default BluePrint;