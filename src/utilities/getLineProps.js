export function getLineProps(coordinates) {

  const lineArray = coordinates.map((xy, index) => {
    if (index < coordinates.length - 1) {
      // Must use the absolute value of the y coordinates since SVG viewbox doesn't allow negative values.
      return {x1: xy[0], x2: coordinates[index+1][0], y1: Math.abs(xy[1]), y2: Math.abs(coordinates[index+1][1])}
    }
    else {
      // If the last element, return the x and y coordinates of the first element to close the polygon.
      return {x1: xy[0], x2: coordinates[0][0], y1: Math.abs(xy[1]), y2: Math.abs(coordinates[0][1])}
    }
  });

  console.log(lineArray)
  return lineArray;
};
