import React from 'react';
import { getRectProps } from './getRectProps';


export function mapSVGRects(props) {
  const { name, coordinates } = props;
  const svgRectArray = coordinates.map((singleItemCoordinates, index) => {
    const rectProps = getRectProps(singleItemCoordinates);
    return <rect id={`${name+index}`} key={`${name+index}`} className="rect" {...rectProps} fill='transparent' onClick={() => alert('Clicked!')} />
  });

  return svgRectArray

}