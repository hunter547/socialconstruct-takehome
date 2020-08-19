import React from 'react';
import { getLineProps } from "./getLineProps"

export function mapSVGLines(coordinates) {
  const svgLineArray = coordinates.map(singleItemCoordinates => {
    const itemParameters = getLineProps(singleItemCoordinates);
    return itemParameters.map(item => (
      <line key={Math.random().toString(36).substr(2, 9)} {...item} stroke="black" strokeWidth={0.5} />
    ));
  });

  return svgLineArray;
} 