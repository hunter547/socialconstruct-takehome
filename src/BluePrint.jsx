import React, { useContext, useState } from 'react';
import { mapSVGLines } from './utilities/mapSVGLines';
import './style/BluePrint.scss'
import { ItemsContext } from './context/ItemsContext';
import { mapSVGRects } from './utilities/mapSVGRects';
 
function BluePrint(props) {

  const { bathrooms, closets, doors, floors, genericRooms, kitchens, pucks, windows } = props;
  const [itemsContext,] = useContext(ItemsContext);

  return (
    <div className="blueprint__container">
      <svg className="blueprint" width={235} height={500} viewBox="9720 120 10000 390" preserveAspectRatio="xMinYMin slice">
        {itemsContext.bathrooms && (
          <g id="bathrooms">
            {mapSVGLines(bathrooms.coordinates, 'pink').map(bathroom => bathroom )}
            {mapSVGRects(bathrooms).map(rect => rect)}
          </g>
        )}
        {itemsContext.closets && (
          <g id="closets">
            {mapSVGLines(closets.coordinates, 'black').map(closet => closet )}
            {mapSVGRects(closets).map(rect => rect)}
          </g>
        )}
        {itemsContext.doors && (
          <g id="doors">
            {mapSVGLines(doors.coordinates, 'green').map(door => door )}
            {mapSVGRects(doors).map(rect => rect)}
          </g>
        )}
        {itemsContext.floors && (
          <>
            <g id="floors">
              {mapSVGLines(floors.coordinates, 'black').map(floor => floor )}
              {mapSVGRects(floors).map(rect => rect)}
            </g>
          </>
        )}
        {itemsContext.generic_rooms && (
          <g id="genericRooms">
            {mapSVGLines(genericRooms.coordinates, 'lightblue').map(genericRoom => genericRoom )}
            {mapSVGRects(genericRooms).map(rect => rect)}
          </g>
        )}
        {itemsContext.kitchens && (
          <g id="kitchens">
            {mapSVGLines(kitchens.coordinates, 'magenta').map(kitchen => kitchen )}
            {mapSVGRects(kitchens).map(rect => rect)}
          </g>
        )}
        {itemsContext.pucks && (
          <g id="pucks">
            {mapSVGLines(pucks.coordinates, 'black').map(puck =>  puck )}
            {mapSVGRects(pucks).map(rect => rect)}
          </g>
        )}
        {itemsContext.windows && (
          <g id="windows">
            {mapSVGLines(windows.coordinates, 'orange').map(window =>  window )}
            {mapSVGRects(windows).map(rect => rect)}
          </g>
        )}
      </svg>
    </div>
  )
}
 
export default BluePrint;