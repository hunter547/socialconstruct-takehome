import React from 'react';
import { mapSVGLines } from './utilities/mapSVGLines';
import './style/BluePrint.scss'
 
function BluePrint(props) {

  const { bathrooms, closets, doors, floors, genericRooms, kitchens, pucks, windows } = props;

  return (
    <div className="blueprint__container">
      <svg className="blueprint" width={235} height={500} viewBox="9720 120 10000 390" preserveAspectRatio="xMinYMin slice">
        <g id="bathrooms">
          {mapSVGLines(bathrooms.coordinates).map(bathroom => bathroom )}
        </g>
        <g id="closets">
          {mapSVGLines(closets.coordinates).map(closet => closet )}
        </g>
        <g id="doors">
          {mapSVGLines(doors.coordinates).map(door => door )}
        </g>
        <g id="floors">
          {mapSVGLines(floors.coordinates).map(floor => floor )}
        </g>
        <g id="genericRooms">
          {mapSVGLines(genericRooms.coordinates).map(genericRoom => genericRoom )}
        </g>
        <g id="kitchens">
          {mapSVGLines(kitchens.coordinates).map(kitchen => kitchen )}
        </g>
        <g id="pucks">
          {mapSVGLines(pucks.coordinates).map(puck =>  puck )}
        </g>
        <g id="windows">
          {mapSVGLines(windows.coordinates).map(window =>  window )}
        </g>
      </svg>
    </div>
  )
}
 
export default BluePrint;