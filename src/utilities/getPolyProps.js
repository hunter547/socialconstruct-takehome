export function getPolyProps(coordinates) {

  let polyPropsString;
  coordinates.forEach((xy, index) => {
    if (index === 0) {
      polyPropsString = `${Math.abs(xy[0]).toString()},${Math.abs(xy[1]).toString()} `
    }
    else if (index < coordinates.length - 1) {
      polyPropsString += `${Math.abs(xy[0]).toString()},${Math.abs(xy[1]).toString()} `;
    }
    else {
      polyPropsString += `${Math.abs(xy[0]).toString()},${Math.abs(xy[1]).toString()}`;
    }
  });
  
  return polyPropsString;
};
