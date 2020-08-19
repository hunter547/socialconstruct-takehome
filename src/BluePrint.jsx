import React, { useContext } from 'react';
import { mapSVGLines } from './utilities/mapSVGLines';
import './style/BluePrint.scss'
import { ItemsContext } from './utilities/ItemsContext';
 
function BluePrint(props) {

  const { bathrooms, closets, doors, floors, genericRooms, kitchens, pucks, windows } = props;
  const [itemsContext,] = useContext(ItemsContext);

  return (
    <div className="blueprint__container">
      <svg className="blueprint" width={235} height={500} viewBox="9720 120 10000 390" preserveAspectRatio="xMinYMin slice">
        {itemsContext.bathrooms && (
          <g id="bathrooms">
            {mapSVGLines(bathrooms.coordinates).map(bathroom => bathroom )}
          </g>
        )}
        {itemsContext.closets && (
          <g id="closets">
            {mapSVGLines(closets.coordinates).map(closet => closet )}
          </g>
        )}
        {itemsContext.doors && (
          <g id="doors">
            {mapSVGLines(doors.coordinates).map(door => door )}
          </g>
        )}
        {itemsContext.floors && (
          <g id="floors">
            {mapSVGLines(floors.coordinates).map(floor => floor )}
          </g>
        )}
        {itemsContext.generic_rooms && (
          <g id="genericRooms">
            {mapSVGLines(genericRooms.coordinates).map(genericRoom => genericRoom )}
          </g>
        )}
        {itemsContext.kitchens && (
          <g id="kitchens">
            {mapSVGLines(kitchens.coordinates).map(kitchen => kitchen )}
          </g>
        )}
        {itemsContext.pucks && (
          <g id="pucks">
            {mapSVGLines(pucks.coordinates).map(puck =>  puck )}
          </g>
        )}
        {itemsContext.windows && (
          <g id="windows">
            {mapSVGLines(windows.coordinates).map(window =>  window )}
          </g>
        )}
      </svg>
    </div>
  )
}
 
export default BluePrint;