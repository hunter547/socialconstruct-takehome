import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/BluePrint.scss'
import { ItemsContext } from '../context/ItemsContext';
import { mapSVGPolys } from '../utilities/mapSVGPolys';
 
function BluePrint(props) {

  const { bathrooms, closets, doors, floors, genericRooms, kitchens, pucks, windows } = props;
  const [itemsContext,] = useContext(ItemsContext);
  const [fillID, setFillID] = useState(null)

  return (
    <div className="blueprint__container">
      <svg className="blueprint" width={235} height={500} viewBox="9720 120 10000 390" preserveAspectRatio="xMinYMin slice">
        {itemsContext.bathrooms && (
          <g id="bathrooms">
            {mapSVGPolys(bathrooms, 'pink', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.closets && (
          <g id="closets">
            {mapSVGPolys(closets, 'black', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.doors && (
          <g id="doors">
            {mapSVGPolys(doors, 'green', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.floors && (
          <g id="floors">
            {mapSVGPolys(floors, 'black', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.generic_rooms && (
          <g id="genericRooms">
            {mapSVGPolys(genericRooms, 'lightblue', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.kitchens && (
          <g id="kitchens">
            {mapSVGPolys(kitchens, 'magenta', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.pucks && (
          <g id="pucks">
            {mapSVGPolys(pucks, 'black', fillID, setFillID).map(poly => poly)}
          </g>
        )}
        {itemsContext.windows && (
          <g id="windows">
            {mapSVGPolys(windows, 'orange', fillID, setFillID).map(poly => poly)}
          </g>
        )}
      </svg>
    </div>
  )
}
 
export default BluePrint;

BluePrint.propTypes = {
  bathrooms: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  closets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  doors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  floors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  genericRooms: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  kitchens: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  pucks: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
  windows: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.number.isRequired
        )
      )
    )
  }),
}