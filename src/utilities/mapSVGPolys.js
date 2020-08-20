import React from 'react';
import { getPolyProps } from './getPolyProps';

export function mapSVGPolys(item, color, fillID, setFillID) {
  const { name, coordinates } = item;
  const svgPolyArray = coordinates.map((singleItemCoordinates, index) => {
    const polyProps = getPolyProps(singleItemCoordinates);
    const nextID = name + index;
    return <polygon 
              id={`${name+index}`} 
              key={`${name+index}`} 
              className="poly" 
              points={polyProps} 
              stroke={color}
              strokeWidth={0.5}
              fill={nextID === fillID ? color : 'transparent'} 
              onClick={() => {fillID === nextID ? setFillID(null) : setFillID(nextID)}} 
            />
  });

  return svgPolyArray;
} 